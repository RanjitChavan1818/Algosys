import requests

# Test get_quiz endpoint
print("Testing GET /api/get_quiz/ endpoint...")
try:
    response = requests.get("http://127.0.0.1:8000/api/get_quiz/")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")
    
    # Test with category filter
    print("\n\nTesting GET /api/get_quiz/?category=linear-search...")
    response = requests.get("http://127.0.0.1:8000/api/get_quiz/?category=linear-search")
    print(f"Status Code: {response.status_code}")
    data = response.json()
    print(f"Number of questions: {len(data.get('questions', []))}")
    if data.get('questions'):
        print(f"First question: {data['questions'][0]}")
        print(f"Has correctOption field: {'correctOption' in data['questions'][0]}")
except Exception as e:
    print(f"Error: {e}")
