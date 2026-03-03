import React from "react";
import practical1 from "assets/img/practical1.jpeg"

const LinearBinarySearch = () => {
  return (
    <div className="bg-#f1edff-100 text-gray-800 font-sans min-h-screen">
      <header className="bg-blue-600 text-black py-4">
        <h1 className="text-center text-3xl font-bold">
          Implementation of Linear Search and Binary Search Techniques
        </h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Aim</h2>
          <p className="text-lg leading-relaxed">
            Implementation of Linear Search and Binary Search Technique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Theory</h2>
          <h3 className="text-xl font-semibold mb-2">What is Search?</h3>
          <p className="text-lg leading-relaxed mb-4">
            Search is a process of finding a value in a list of values. In other words,
            searching is the process of locating a given value's position in a list of values.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Linear Search Algorithm (Sequential Search Algorithm)
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Linear search algorithm finds a given element in a list of elements with O(n)
            time complexity, where n is the total number of elements in the list. This
            search process starts by comparing the search element with the first element
            in the list. If both are matched, then the result is "Element found";
            otherwise, the search element is compared with the next element in the list.
            This process is repeated until the search element is compared with the last
            element in the list. If the last element also doesn't match, the result is
            "Element not found in the list."
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Linear search is implemented using the following steps:
          </p>
          <ol className="list-decimal list-inside ml-4 text-lg">
            <li>Read the search element from the user.</li>
            <li>Compare the search element with the first element in the list.</li>
            <li>
              If both are matched, display "Given element is found!!!" and terminate the
              function.
            </li>
            <li>
              If both are not matched, compare the search element with the next element
              in the list.
            </li>
            <li>Repeat steps 3 and 4 until the search element is compared with the last element in the list.</li>
            <li>
              If the last element in the list also doesn't match, display "Element is not
              found!!!" and terminate the function.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Binary Search</h3>
          <p className="text-lg leading-relaxed mb-4">
            Before searching, the list of items should be sorted in ascending order.
            First, compare the key value with the item in the mid-position of the array.
            If there is a match, return the position immediately. If the value is less
            than the element in the middle location of the array, the required value lies
            in the lower half of the array. 
            </p>
            <p className="text-lg leading-relaxed mb-4" >If the value is greater than the element in
            the middle location of the array, the required value lies in the upper half
            of the array. Repeat the above procedure on the lower half or upper half of
            the array.
          </p>

          <h4 className="text-lg font-semibold mb-2">Algorithm:</h4>
          <div className="mt-4 h-9 w-6">
  <img
    src={practical1}
    alt="Binary Search Algorithm"
    className="w-500px max-w-md mx-auto border border-gray-300 shadow-sm"
    style={{ height: "700px" }} // Adjust the height value as needed
  />
</div>

        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Search Techniques. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LinearBinarySearch;
