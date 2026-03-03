from django.core.mail import send_mail
import random
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CustomUser, OTP
from django.conf import settings
from django.db import transaction
from django.core.cache import cache
from rest_framework.permissions import AllowAny
import logging
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from datetime import datetime, timedelta
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        # Extract data from the request
        full_name = request.data.get('full_name')
        user_class = request.data.get('user_class')
        roll_no = request.data.get('roll_no')
        stream = request.data.get('stream')
        email = request.data.get('email')
        username = email
        contact_number = request.data.get('contact_number')
        dob = request.data.get('dob')
        password = request.data.get('password')
        college_name = request.data.get('college_name')

        # Validate that required fields are present
        required_fields = ['full_name', 'email', 'user_class', 
            'roll_no', 'stream', 'dob', 'college_name','contact_number',
            'password']
        for field in required_fields:
            if not request.data.get(field):
                return Response({'error': f'{field} is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the username or email already exists
        if CustomUser.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        if CustomUser.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # Validate dob format
        try:
            # First, try to parse it as YYYY-MM-DD
            dob_parsed = datetime.strptime(dob, '%Y-%m-%d').date()
        except ValueError:
            try:
                # If that fails, try parsing it as DD-MM-YYYY
                dob_parsed = datetime.strptime(dob, '%d-%m-%Y').date()
            except ValueError:
                return Response({'error': 'Invalid date format for dob. Use YYYY-MM-DD or DD-MM-YYYY.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Generate OTP
        otp_code = str(random.randint(100000, 999999))

        try:
            # Store registration data temporarily in cache (expires in 10 minutes)
            registration_data = {
                'username': username,
                'full_name': full_name,
                'user_class': user_class,
                'roll_no': roll_no,
                'stream': stream,
                'email': email,
                'contact_number': contact_number,
                'dob': dob_parsed.isoformat(),  # Store as ISO format string
                'password': password,  # Will be hashed when creating user
                'college_name': college_name,
                'otp_code': otp_code
            }
            
            # Store in cache with email as key (expires in 10 minutes)
            cache_key = f'registration_{email}'
            cache.set(cache_key, registration_data, timeout=600)  # 10 minutes

            # Send OTP email
            send_mail(
                'Your OTP Code',
                f'Your OTP code is {otp_code}. This code will expire in 10 minutes.',
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )

            # Return success response to wait for OTP verification
            return Response(
                {
                    'message': 'OTP sent to your email. Please verify OTP to complete registration.',
                    'email': email  # Return email for OTP verification
                },
                status=status.HTTP_200_OK
            )

        except Exception as e:
            print(f"Registration failed: {e}")
            return Response(
                {'error': f'Registration failed: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
class VerifyOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        print(f"Received request data: {request.data}")
        email = request.data.get('email') or request.data.get('username')  # Accept both email and username
        otp = request.data.get('otp_code')

        # Validate input
        if not email or not otp:
            return Response({"error": "Email/Username and OTP are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Retrieve registration data from cache
            cache_key = f'registration_{email}'
            registration_data = cache.get(cache_key)

            if not registration_data:
                return Response({"error": "OTP expired or invalid. Please register again."}, status=status.HTTP_400_BAD_REQUEST)

            # Verify OTP
            if registration_data.get('otp_code') != otp:
                return Response({"error": "Invalid OTP code."}, status=status.HTTP_400_BAD_REQUEST)

            # Check if user already exists (double-check)
            username = registration_data.get('username')
            if CustomUser.objects.filter(username=username).exists():
                # Clear cache
                cache.delete(cache_key)
                return Response({"error": "User already exists. Please login."}, status=status.HTTP_400_BAD_REQUEST)

            if CustomUser.objects.filter(email=email).exists():
                # Clear cache
                cache.delete(cache_key)
                return Response({"error": "Email already exists. Please login."}, status=status.HTTP_400_BAD_REQUEST)

            # Create user only after OTP verification
            with transaction.atomic():
                user = CustomUser(
                    username=username,
                    full_name=registration_data.get('full_name'),
                    user_class=registration_data.get('user_class'),
                    roll_no=registration_data.get('roll_no'),
                    stream=registration_data.get('stream'),
                    email=email,
                    contact_number=registration_data.get('contact_number'),
                    dob=datetime.strptime(registration_data.get('dob'), '%Y-%m-%d').date(),
                    college_name=registration_data.get('college_name'),
                    is_active=True  # Activate user after OTP verification
                )
                user.set_password(registration_data.get('password'))
                user.save()

                # Create OTP record for tracking
                otp_instance = OTP.objects.create(
                    user=user,
                    otp_code=otp,
                    otp_verified=True  # Mark as verified since we're creating it after verification
                )

            # Clear registration data from cache
            cache.delete(cache_key)

            # Return success response
            return Response({
                "message": "OTP verified successfully. User registered successfully.",
                "username": username
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(f"OTP verification failed: {e}")
            return Response({"error": f"Error during OTP verification: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                {"error": "Invalid credentials."},
                status=status.HTTP_401_UNAUTHORIZED
            )

        if not user.is_active:
            return Response(
                {"error": "Account is inactive."},
                status=status.HTTP_403_FORBIDDEN
            )

        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "is_superuser": user.is_superuser,  # ✅ CORRECT
            "is_staff": user.is_staff,          # (optional)
            "message": "Login successful"
        }, status=status.HTTP_200_OK)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UserProfileView(APIView):
    """
    API View to fetch and return user profile details.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user  # Get the current logged-in user
        profile_data = {
            "full_name": user.full_name,
            "user_class": user.user_class,
            "roll_no": user.roll_no,
            "stream": user.stream,
            "dob": user.dob,
            "college_name": user.college_name,
            "contact_number": user.contact_number,
            "username": user.username,
            "email": user.email,
            # Return absolute URL for profile image if it exists
            "profile_image": request.build_absolute_uri(user.profile_image.url)
            if getattr(user, "profile_image", None)
            else None,
        }
        return Response(profile_data)


from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.utils.dateparse import parse_date

class UpdateUserProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        user = request.user
        data = request.data

        # 🔒 username intentionally NOT updated

        user.full_name = data.get("full_name", user.full_name)
        user.user_class = data.get("user_class", user.user_class)
        user.roll_no = data.get("roll_no", user.roll_no)
        user.stream = data.get("stream", user.stream)
        user.college_name = data.get("college_name", user.college_name)
        user.contact_number = data.get("contact_number", user.contact_number)

        dob = data.get("dob")
        if dob:
            user.dob = parse_date(dob)

        # Profile image
        if "profile_image" in request.FILES:
            user.profile_image = request.FILES["profile_image"]

        user.save()

        return Response(
            {"message": "Profile updated permanently"},
            status=status.HTTP_200_OK
        )



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get('refresh_token')
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Logged out successfully."}, status=200)
        except Exception as e:
            return Response({"error": str(e)}, status=400)



from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
import logging
from .models import Quiz, UserSubmission

# Setting up logging for debugging
logger = logging.getLogger(__name__)

# SaveQuizView class
@method_decorator(csrf_exempt, name='dispatch')  # Disable CSRF for this view
class SaveQuizView(View):
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            category = data.get('category', 'linear-search')  # Default to linear-search if not provided
            for q in data['questions']:
                Quiz.objects.create(
                    question=q['question'],
                    optionA=q['options']['A'],
                    optionB=q['options']['B'],
                    optionC=q['options']['C'],
                    optionD=q['options']['D'],
                    correctOption=q['correct'],
                    category=category
                )
            return JsonResponse({"message": "Quiz saved successfully!"})
        except json.JSONDecodeError:
            logger.error("Invalid JSON data received")
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
        except KeyError as e:
            logger.error(f"Missing required data: {e}")
            return JsonResponse({"error": f"Missing required data: {e}"}, status=400)
        except Exception as e:
            logger.error(f"Error occurred: {e}")
            return JsonResponse({"error": str(e)}, status=500)


# SubmitQuizView class
 # Disable CSRF for this view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import UserSubmission  # Your model

class SubmitQuizView(APIView):
    """
    API view to submit quiz responses.
    """

    # Apply JWT Authentication and require users to be authenticated
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    @method_decorator(csrf_exempt)  # CSRF exemption (if CSRF middleware still interferes)
    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            user_id = request.user.id  # Retrieve user ID from JWT token
            responses = data.get('responses', [])
            quiz_id = data['responses'][0]['questionId'] if responses else None  # Extract quiz ID

            if not quiz_id:
                return Response({"error": "No quiz data submitted"}, status=status.HTTP_400_BAD_REQUEST)

            # Check if user already attempted the quiz
            if UserSubmission.objects.filter(userId=user_id, quizId=quiz_id, isAttempted=True).exists():
                return Response({"message": "Already attempted"}, status=status.HTTP_400_BAD_REQUEST)

            # Save user submission
            marks = data.get('score', 0)  # Default score to 0 if not provided
            UserSubmission.objects.create(
                userId=user_id,
                quizId=quiz_id,
                marks=marks,
                isAttempted=True
            )
            return Response({"message": "Quiz submitted successfully!"}, status=status.HTTP_201_CREATED)
        
        except KeyError as e:
            return Response({"error": f"Missing required data: {e}"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


from django.http import JsonResponse
from django.views import View
from .models import Quiz  # Your Quiz model

class GetQuizView(View):
    def get(self, request, *args, **kwargs):
        try:
            # Get category from query parameters
            category = request.GET.get('category', None)
            
            # Fetch quiz questions based on category
            if category:
                quiz_questions = Quiz.objects.filter(category=category)
            else:
                quiz_questions = Quiz.objects.all()

            # Serialize the quiz data
            questions = [
                {
                    "id": quiz.id,
                    "question": quiz.question,
                    "options": {
                        "A": quiz.optionA,
                        "B": quiz.optionB,
                        "C": quiz.optionC,
                        "D": quiz.optionD,
                    },
                    "correctOption": quiz.correctOption,
                    "category": quiz.category,
                }
                for quiz in quiz_questions
            ]

            return JsonResponse({"questions": questions}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

# UpdateQuizView class
@method_decorator(csrf_exempt, name='dispatch')
class UpdateQuizView(View):
    def put(self, request, quiz_id, *args, **kwargs):
        try:
            data = json.loads(request.body)
            quiz = Quiz.objects.get(id=quiz_id)
            
            quiz.question = data.get('question', quiz.question)
            quiz.optionA = data.get('options', {}).get('A', quiz.optionA)
            quiz.optionB = data.get('options', {}).get('B', quiz.optionB)
            quiz.optionC = data.get('options', {}).get('C', quiz.optionC)
            quiz.optionD = data.get('options', {}).get('D', quiz.optionD)
            quiz.correctOption = data.get('correct', quiz.correctOption)
            quiz.category = data.get('category', quiz.category)
            
            quiz.save()
            return JsonResponse({"message": "Quiz updated successfully!"})
        except Quiz.DoesNotExist:
            return JsonResponse({"error": "Quiz not found"}, status=404)
        except Exception as e:
            logger.error(f"Error occurred: {e}")
            return JsonResponse({"error": str(e)}, status=500)

# DeleteQuizView class
@method_decorator(csrf_exempt, name='dispatch')
class DeleteQuizView(View):
    def delete(self, request, quiz_id, *args, **kwargs):
        try:
            quiz = Quiz.objects.get(id=quiz_id)
            quiz.delete()
            return JsonResponse({"message": "Quiz deleted successfully!"})
        except Quiz.DoesNotExist:
            return JsonResponse({"error": "Quiz not found"}, status=404)
        except Exception as e:
            logger.error(f"Error occurred: {e}")
            return JsonResponse({"error": str(e)}, status=500)

from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .models import StudentResult  # Assuming this is your model

class UploadStudentDetailsView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            # Retrieve data from the request
            roll_no = request.data.get('roll_no')
            name = request.data.get('name')
            performance = float(request.data.get('performance', 0))  # Score out of 4
            mcqs = float(request.data.get('mcqs', 0))  # Score out of 4
            attendance = float(request.data.get('attendance', 0))  # Score out of 
            practical_no = int(request.data.get('practical_no', 0))  # Number of practicals attended
            batch = request.data.get('batch')

            # Check if all required fields are provided
            if not all([roll_no, name, mcqs, attendance, practical_no, batch]):
                return JsonResponse({'success': False, 'error': 'All fields are required.'}, status=400)

            # Create the StudentResult object
            student_result = StudentResult(
                roll_no=roll_no,
                name=name,
                performance=performance,
                mcqs=mcqs,
                attendance=attendance,
                practical_no=practical_no,
                batch=batch,
            )
            student_result.save()

            # Calculate total score (performance + mcqs + attendance)
            total_score = round(student_result.performance + student_result.mcqs + student_result.attendance , 2)

            # Return a success response with the total score
            return JsonResponse({
                'success': True,
                'message': 'Student details uploaded successfully.',
                'total_score': total_score,  # Total out of 10
                'practical_no': practical_no,  # Number of practicals attended
            })

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

from django.http import JsonResponse
from django.views import View
from .models import StudentResult  # Ensure the correct model is imported

class StudentDetailsView(View):
    def get(self, request):
        # Fetch all students from the database
        students = StudentResult.objects.all().values(
            'roll_no', 'name', 'performance', 'mcqs', 'attendance', 'practical_no', 'batch'
        )
        # Return the data as JSON
        return JsonResponse({'students': list(students)}, safe=False)
    
import subprocess
import tempfile
import os
import json
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


@method_decorator(csrf_exempt, name="dispatch")
class RunCodeView(View):

    def post(self, request):
        try:
            data = json.loads(request.body)
            code = data.get("code", "")
            user_input = data.get("input", "")
            language = data.get("language", "cpp")

            if language == "python":
                return self.run_python(code, user_input)

            elif language == "c":
                return self.run_c(code, user_input)

            else:
                return self.run_cpp(code, user_input)

        except Exception as e:
            return JsonResponse({"output": str(e)})

    def run_python(self, code, user_input):
        filename = None
        try:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".py", mode='w', encoding='utf-8') as f:
                f.write(code)
                filename = f.name

            # Ensure user_input is a string and ends with newline if not empty
            if not user_input:
                user_input = ""
            elif not user_input.endswith('\n'):
                user_input = user_input + '\n'

            # Use subprocess.run for better error handling
            result = subprocess.run(
                ["python", filename],
                input=user_input.encode('utf-8'),
                capture_output=True,
                timeout=5,
                text=False
            )

            # Combine stdout and stderr
            output = result.stdout + result.stderr
            decoded_output = output.decode('utf-8', errors='replace')
            
            if result.returncode != 0:
                # Check for EOFError and provide helpful message
                if "EOFError" in decoded_output or "EOF when reading a line" in decoded_output:
                    helpful_message = (
                        "⚠️ Error: Your code requires input but none was provided.\n\n"
                        "Please enter input in the 'Enter Input' field in the editor.\n\n"
                        "Example: If your code has input(), enter values (one per line):\n"
                        "5\n"
                        "10\n\n"
                        "Original error:\n" + decoded_output
                    )
                    return JsonResponse({"output": helpful_message})
                
                # For other errors, return the error output
                return JsonResponse({"output": decoded_output})
            
            return JsonResponse({"output": decoded_output})

        except subprocess.TimeoutExpired:
            return JsonResponse({"output": "Error: Code execution timed out (max 5 seconds)"})
        
        except subprocess.CalledProcessError as e:
            error_output = e.output.decode('utf-8', errors='replace') if e.output else str(e)
            return JsonResponse({"output": error_output})
        
        except Exception as e:
            return JsonResponse({"output": f"Error: {str(e)}"})

        finally:
            if filename and os.path.exists(filename):
                try:
                    os.remove(filename)
                except:
                    pass

    def run_cpp(self, code, user_input):
        cpp_file = None
        exe = None
        try:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".cpp", mode='w', encoding='utf-8') as f:
                f.write(code)
                cpp_file = f.name

            exe = cpp_file.replace(".cpp", "")

            # Compile
            compile_result = subprocess.run(
                ["g++", cpp_file, "-o", exe],
                capture_output=True,
                timeout=5,
                text=False
            )

            if compile_result.returncode != 0:
                error_output = compile_result.stderr.decode('utf-8', errors='replace')
                return JsonResponse({"output": f"Compilation Error:\n{error_output}"})

            # Ensure user_input ends with newline if not empty
            if user_input and not user_input.endswith('\n'):
                user_input = user_input + '\n'

            # Run
            run_result = subprocess.run(
                [exe],
                input=user_input.encode('utf-8') if user_input else b'',
                capture_output=True,
                timeout=5,
                text=False
            )

            output = run_result.stdout + run_result.stderr
            return JsonResponse({"output": output.decode('utf-8', errors='replace')})

        except subprocess.TimeoutExpired:
            return JsonResponse({"output": "Error: Code execution timed out (max 5 seconds)"})
        
        except subprocess.CalledProcessError as e:
            error_output = e.output.decode('utf-8', errors='replace') if e.output else str(e)
            return JsonResponse({"output": error_output})
        
        except Exception as e:
            return JsonResponse({"output": f"Error: {str(e)}"})

        finally:
            if cpp_file and os.path.exists(cpp_file):
                try:
                    os.remove(cpp_file)
                except:
                    pass
            if exe and os.path.exists(exe):
                try:
                    os.remove(exe)
                except:
                    pass

    def run_c(self, code, user_input):
        c_file = None
        exe = None
        try:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".c", mode='w', encoding='utf-8') as f:
                f.write(code)
                c_file = f.name

            exe = c_file.replace(".c", "")

            # Compile
            compile_result = subprocess.run(
                ["gcc", c_file, "-o", exe],
                capture_output=True,
                timeout=5,
                text=False
            )

            if compile_result.returncode != 0:
                error_output = compile_result.stderr.decode('utf-8', errors='replace')
                return JsonResponse({"output": f"Compilation Error:\n{error_output}"})

            # Ensure user_input ends with newline if not empty
            if user_input and not user_input.endswith('\n'):
                user_input = user_input + '\n'

            # Run
            run_result = subprocess.run(
                [exe],
                input=user_input.encode('utf-8') if user_input else b'',
                capture_output=True,
                timeout=5,
                text=False
            )

            output = run_result.stdout + run_result.stderr
            return JsonResponse({"output": output.decode('utf-8', errors='replace')})

        except subprocess.TimeoutExpired:
            return JsonResponse({"output": "Error: Code execution timed out (max 5 seconds)"})
        
        except subprocess.CalledProcessError as e:
            error_output = e.output.decode('utf-8', errors='replace') if e.output else str(e)
            return JsonResponse({"output": error_output})
        
        except Exception as e:
            return JsonResponse({"output": f"Error: {str(e)}"})

        finally:
            if c_file and os.path.exists(c_file):
                try:
                    os.remove(c_file)
                except:
                    pass
            if exe and os.path.exists(exe):
                try:
                    os.remove(exe)
                except:
                    pass
