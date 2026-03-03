import practical1 from "assets/img/practical1.jpeg";
import practical2 from "assets/img/practical2.png";
import bubble_sort from "assets/img/bubble_sort.jpeg";

export const imageMap = {
  practical1,
  practical2,
  bubble_sort,
};

export const defaultTheoryData = [
  {
    id: 1,
    key: "linear-search",
    name: "Linear Search Theory",
    file: "Theory.js",
    description: "Practical 1 - Linear Search",
    title: "Implementation of Linear Search Techniques",
    aim: "Implementation of Linear Search Technique.",
    sections: [
      {
        heading: "What is Search?",
        paragraphs: [
          "Search is a process of finding a value in a list of values. In other words, searching is the process of locating a given value's position in a list of values.",
        ],
      },
      {
        heading: "Linear Search Algorithm (Sequential Search Algorithm)",
        paragraphs: [
          "Linear search algorithm finds a given element in a list of elements with O(n) time complexity, where n is the total number of elements in the list. This search process starts by comparing the search element with the first element in the list. If both are matched, then the result is \"Element found\"; otherwise, the search element is compared with the next element in the list.",
        ],
      },
    ],
    imageKey: "practical1",
    imageAlt: "Binary Search Algorithm",
    imageContainerClassName: "mt-4 h-auto w-auto",
    imageClassName: "w-full max-w-xl mx-auto border border-gray-300 shadow-lg",
    imageStyle: { height: "800px" },
  },
  {
    id: 2,
    key: "binary-search",
    name: "Binary Search Theory",
    file: "Binary_Thoery.js",
    description: "Practical 2 - Binary Search",
    title: "Implementation of Binary Search Techniques",
    aim: "Implementation of Binary Search Technique.",
    sections: [
      {
        heading: "What is Search?",
        paragraphs: [
          "Search is a process of finding a value in a list of values. In other words, searching is the process of locating a given value's position in a list of values.",
        ],
      },
      {
        heading: "Binary Search",
        paragraphs: [
          "Before searching, the list of items should be sorted in ascending order. First, compare the key value with the item in the mid-position of the array. If there is a match, return the position immediately. If the value is less than the element in the middle location of the array, the required value lies in the lower half of the array.",
          "If the value is greater than the element in the middle location of the array, the required value lies in the upper half of the array. Repeat the above procedure on the lower half or upper half of the array.",
        ],
      },
    ],
    imageKey: "practical2",
    imageAlt: "Binary Search Algorithm",
    imageContainerClassName: "mt-4 flex justify-center",
    imageClassName: "border border-gray-300 shadow-lg",
    imageStyle: {
      maxHeight: "800px",
      maxWidth: "100%",
      height: "auto",
      width: "auto",
      objectFit: "contain",
    },
  },
  {
    id: 3,
    key: "bubble-sort",
    name: "Bubble Sort Theory",
    file: "BubbleSort_Theory.js",
    description: "Practical 3 - Bubble Sort",
    title: "Implementation of Bubble Sort Technique",
    aim: "Implementation of Bubble Sort Technique.",
    sections: [
      {
        heading: "What is Sorting?",
        paragraphs: [
          "Sorting is the process of arranging data elements in a specific order, such as ascending or descending order. Sorting makes searching and data processing easier and more efficient.",
        ],
      },
      {
        heading: "Bubble Sort",
        paragraphs: [
          "Bubble Sort is a simple comparison-based sorting algorithm. In this technique, adjacent elements are compared and swapped if they are in the wrong order. This process is repeated until the list becomes sorted.",
          "With each pass, the largest unsorted element “bubbles up” to its correct position at the end of the array. The algorithm continues until no swaps are required.",
        ],
      },
    ],
    imageKey: "bubble_sort",
    imageAlt: "Bubble Sort Algorithm",
    imageContainerClassName: "mt-4 h-auto w-auto",
    imageClassName: "w-full max-w-xl mx-auto border border-gray-300 shadow-lg",
    imageStyle: { height: "800px" },
  },
];
