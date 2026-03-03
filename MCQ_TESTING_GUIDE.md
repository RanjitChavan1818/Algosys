# MCQ Feature - Testing Guide

## Quick Start

### Backend Server Status
✅ Database migration applied
✅ 15 sample MCQs loaded into database
✅ API endpoints updated
✅ Admin interface configured

### Frontend Status
✅ MCQ upload component updated with category selector
✅ MCQ display component created
✅ All practical pages updated to show MCQs

---

## Testing Instructions

### Test 1: Upload MCQs (Superuser)

1. **Access Admin Panel:**
   - Navigate to: `http://127.0.0.1:8000/admin/`
   - Login with superuser credentials

2. **View Existing MCQs:**
   - Go to "Quizzes" section
   - See 15 MCQs organized by category
   - Filter by category using the right panel

3. **Upload New MCQs via Frontend:**
   - Navigate to: `http://localhost:3000/admin/dashboard/settings`
   - Scroll down to "Upload MCQs" form
   - Select category: "Linear Search", "Binary Search", or "Bubble Sort"
   - Add MCQs:
     - Enter question text
     - Fill in options A, B, C, D
     - Select correct option (A/B/C/D)
   - Click "Add New MCQ" for multiple questions
   - Click "Submit" to save

### Test 2: View MCQs on Practical Pages (Normal User)

1. **Navigate to Linear Search:**
   - Go to: `http://localhost:3000/admin/dashboard/linearSearch`
   - Scroll down to "Practice MCQs" section
   - Should see 5 MCQs specific to Linear Search

2. **Navigate to Binary Search:**
   - Go to: `http://localhost:3000/admin/dashboard/binarySearch`
   - Scroll down to "Practice MCQs" section
   - Should see 5 MCQs specific to Binary Search

3. **Navigate to Bubble Sort:**
   - Go to: `http://localhost:3000/admin/dashboard/bubbleSort`
   - Scroll down to "Practice MCQs" section
   - Should see 5 MCQs specific to Bubble Sort

### Test 3: Solve MCQs

1. **Answer Questions:**
   - Click on radio buttons to select answers
   - Options are clearly labeled A, B, C, D
   - Visual feedback shows selected option

2. **Submit Answers:**
   - Click "Submit" button at bottom
   - System calculates score
   - Correct answers highlighted in green
   - Incorrect answers highlighted in red

3. **Review Results:**
   - Score displayed as percentage
   - Correct/incorrect count shown (e.g., "4/5 correct")
   - All answers remain visible with color coding

4. **Try Again:**
   - Click "Try Again" button
   - Form resets with no answers selected
   - Can attempt quiz again

### Test 4: API Testing

#### Fetch MCQs by Category
```bash
# Get all Linear Search MCQs
curl "http://127.0.0.1:8000/api/get_quiz/?category=linear-search"

# Get all Binary Search MCQs
curl "http://127.0.0.1:8000/api/get_quiz/?category=binary-search"

# Get all Bubble Sort MCQs
curl "http://127.0.0.1:8000/api/get_quiz/?category=bubble-sort"

# Get all MCQs (no category filter)
curl "http://127.0.0.1:8000/api/get_quiz/"
```

#### Save MCQs with Category
```bash
curl -X POST "http://127.0.0.1:8000/api/save_quiz/" \
  -H "Content-Type: application/json" \
  -d '{
    "category": "linear-search",
    "questions": [
      {
        "question": "Test Question?",
        "options": {"A": "Option A", "B": "Option B", "C": "Option C", "D": "Option D"},
        "correct": "A"
      }
    ]
  }'
```

---

## Expected Behavior

### MCQ Upload Form
- ✅ Category dropdown selects specific algorithm
- ✅ Multiple MCQs can be added/removed dynamically
- ✅ Form validation prevents empty submissions
- ✅ Success message shows after upload

### MCQ Display
- ✅ Only MCQs for selected category are shown
- ✅ Questions display with options A, B, C, D
- ✅ Radio buttons allow single selection per question
- ✅ Score calculation is accurate
- ✅ Color coding works correctly
- ✅ Try Again resets the form

### Database
- ✅ MCQs stored with category field
- ✅ Queries filtered by category work correctly
- ✅ Admin interface shows MCQs with filters

---

## Sample MCQ Data Verification

### Linear Search MCQs
```
1. What is the time complexity of linear search?
   Correct: B (O(n))

2. Which of the following is an advantage of linear search?
   Correct: B (Works on both sorted and unsorted arrays)

3. In linear search, what is the worst-case scenario?
   Correct: C (Element is not present in the array)

4. How many comparisons are needed in the best case for linear search?
   Correct: B (1 comparison)

5. Linear search is also known as:
   Correct: C (Sequential search)
```

### Binary Search MCQs
```
1. What is the time complexity of binary search?
   Correct: B (O(log n))

2. Binary search requires the array to be:
   Correct: C (Sorted)

3. In binary search, we divide the search space into how many parts?
   Correct: C (Two equal parts)

4. What is the maximum number of comparisons needed for binary search in an array of size 1024?
   Correct: A (10 comparisons)

5. Which of the following statements about binary search is true?
   Correct: D (Both B and C)
```

### Bubble Sort MCQs
```
1. What is the worst-case time complexity of bubble sort?
   Correct: C (O(n²))

2. In bubble sort, adjacent elements are compared and swapped if they are in wrong order. After how many passes is the array guaranteed to be sorted?
   Correct: B (n-1 passes)

3. What is the best-case time complexity of bubble sort?
   Correct: A (O(n))

4. Bubble sort is a stable sorting algorithm. What does 'stable' mean?
   Correct: B (Equal elements maintain their relative order)

5. After the first pass of bubble sort, where is the largest element positioned?
   Correct: C (At the end)
```

---

## Troubleshooting

### MCQs not appearing on practical pages
- [ ] Check backend is running: `python manage.py runserver`
- [ ] Verify frontend is running: `npm start`
- [ ] Check browser console for API errors
- [ ] Verify MCQs exist in database

### Category not being saved
- [ ] Clear browser cache
- [ ] Restart frontend: `npm start`
- [ ] Verify CardSettings component has category dropdown

### Score calculation issues
- [ ] Check correctOption values in database (should be A/B/C/D)
- [ ] Verify CardMCQ component compares correctly
- [ ] Clear browser cache and retry

### Admin page not showing MCQs
- [ ] Restart Django server: `python manage.py runserver`
- [ ] Verify QuizAdmin is registered in admin.py
- [ ] Check database has data: `python manage.py shell`

---

## Files to Check if Issues Occur

1. **Backend Issues:**
   - [DSA/models.py](DSA/models.py) - Quiz model definition
   - [DSA/views.py](DSA/views.py) - API endpoints
   - [DSA/admin.py](DSA/admin.py) - Admin configuration

2. **Frontend Issues:**
   - [src/components/Cards/CardMCQ.js](src/components/Cards/CardMCQ.js) - MCQ display
   - [src/components/Cards/CardSettings.js](src/components/Cards/CardSettings.js) - MCQ upload
   - [src/views/visulization/*.js](src/views/visulization/) - Practical pages

3. **Database Issues:**
   - [DSA/migrations/0004_quiz_category.py](DSA/migrations/0004_quiz_category.py) - Migration file
   - [load_mcqs.py](load_mcqs.py) - Sample data script

---

## Success Criteria

✅ Superusers can upload MCQs with category selection
✅ MCQs are visible only on their respective practical pages
✅ Normal users can solve MCQs and see immediate feedback
✅ Score calculation works correctly
✅ All 15 sample MCQs are in database (5 per category)
✅ Admin interface allows MCQ management
✅ API endpoints support category filtering

---

## Performance Notes

- MCQ loading is async and doesn't block UI
- Score calculation happens on client-side (instant feedback)
- No page reload needed to retry quiz
- Efficient database queries with category filtering

---

## Future Enhancements

1. MCQ difficulty levels
2. Time-limited quizzes
3. User performance tracking/analytics
4. Leaderboard for MCQs
5. Bulk MCQ upload via CSV
6. MCQ scheduling
7. Question randomization
8. Pass/fail thresholds
