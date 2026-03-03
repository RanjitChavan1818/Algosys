# This script can be run with: python manage.py shell < load_mcqs.py
from DSA.models import Quiz

# Clear existing MCQs
Quiz.objects.all().delete()

# Linear Search MCQs
linear_search_mcqs = [
    {
        "question": "What is the time complexity of linear search?",
        "optionA": "O(log n)",
        "optionB": "O(n)",
        "optionC": "O(n²)",
        "optionD": "O(1)",
        "correctOption": "B",
        "category": "linear-search"
    },
    {
        "question": "Which of the following is an advantage of linear search?",
        "optionA": "It requires sorted array",
        "optionB": "Works on both sorted and unsorted arrays",
        "optionC": "Very fast for large datasets",
        "optionD": "Requires less memory",
        "correctOption": "B",
        "category": "linear-search"
    },
    {
        "question": "In linear search, what is the worst-case scenario?",
        "optionA": "Element is at the beginning",
        "optionB": "Element is in the middle",
        "optionC": "Element is not present in the array",
        "optionD": "Element is at position n/2",
        "correctOption": "C",
        "category": "linear-search"
    },
    {
        "question": "How many comparisons are needed in the best case for linear search?",
        "optionA": "0 comparisons",
        "optionB": "1 comparison",
        "optionC": "n comparisons",
        "optionD": "log(n) comparisons",
        "correctOption": "B",
        "category": "linear-search"
    },
    {
        "question": "Linear search is also known as:",
        "optionA": "Binary search",
        "optionB": "Depth-first search",
        "optionC": "Sequential search",
        "optionD": "Hash search",
        "correctOption": "C",
        "category": "linear-search"
    },
]

# Binary Search MCQs
binary_search_mcqs = [
    {
        "question": "What is the time complexity of binary search?",
        "optionA": "O(n)",
        "optionB": "O(log n)",
        "optionC": "O(n²)",
        "optionD": "O(1)",
        "correctOption": "B",
        "category": "binary-search"
    },
    {
        "question": "Binary search requires the array to be:",
        "optionA": "Unsorted",
        "optionB": "Randomly arranged",
        "optionC": "Sorted",
        "optionD": "In descending order",
        "correctOption": "C",
        "category": "binary-search"
    },
    {
        "question": "In binary search, we divide the search space into how many parts?",
        "optionA": "Three equal parts",
        "optionB": "Four equal parts",
        "optionC": "Two equal parts",
        "optionD": "Five equal parts",
        "correctOption": "C",
        "category": "binary-search"
    },
    {
        "question": "What is the maximum number of comparisons needed for binary search in an array of size 1024?",
        "optionA": "10 comparisons",
        "optionB": "512 comparisons",
        "optionC": "1024 comparisons",
        "optionD": "100 comparisons",
        "correctOption": "A",
        "category": "binary-search"
    },
    {
        "question": "Which of the following statements about binary search is true?",
        "optionA": "It can work on unsorted arrays",
        "optionB": "It is slower than linear search for small arrays",
        "optionC": "It requires the array to be sorted",
        "optionD": "Both B and C",
        "correctOption": "D",
        "category": "binary-search"
    },
]

# Bubble Sort MCQs
bubble_sort_mcqs = [
    {
        "question": "What is the worst-case time complexity of bubble sort?",
        "optionA": "O(n)",
        "optionB": "O(n log n)",
        "optionC": "O(n²)",
        "optionD": "O(log n)",
        "correctOption": "C",
        "category": "bubble-sort"
    },
    {
        "question": "In bubble sort, adjacent elements are compared and swapped if they are in wrong order. After how many passes is the array guaranteed to be sorted?",
        "optionA": "1 pass",
        "optionB": "n-1 passes",
        "optionC": "log(n) passes",
        "optionD": "n passes",
        "correctOption": "B",
        "category": "bubble-sort"
    },
    {
        "question": "What is the best-case time complexity of bubble sort?",
        "optionA": "O(n)",
        "optionB": "O(n²)",
        "optionC": "O(log n)",
        "optionD": "O(1)",
        "correctOption": "A",
        "category": "bubble-sort"
    },
    {
        "question": "Bubble sort is a stable sorting algorithm. What does 'stable' mean?",
        "optionA": "The array doesn't change if it's already sorted",
        "optionB": "Equal elements maintain their relative order",
        "optionC": "It uses minimal memory",
        "optionD": "It is faster for large datasets",
        "correctOption": "B",
        "category": "bubble-sort"
    },
    {
        "question": "After the first pass of bubble sort, where is the largest element positioned?",
        "optionA": "At the beginning",
        "optionB": "At the middle",
        "optionC": "At the end",
        "optionD": "At a random position",
        "correctOption": "C",
        "category": "bubble-sort"
    },
]

# Create all MCQs
all_mcqs = linear_search_mcqs + binary_search_mcqs + bubble_sort_mcqs

for mcq_data in all_mcqs:
    Quiz.objects.create(**mcq_data)

print(f"Successfully created {len(all_mcqs)} MCQs")
print(f"- Linear Search: {len(linear_search_mcqs)} MCQs")
print(f"- Binary Search: {len(binary_search_mcqs)} MCQs")
print(f"- Bubble Sort: {len(bubble_sort_mcqs)} MCQs")
