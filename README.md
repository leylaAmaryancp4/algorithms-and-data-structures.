# algorithms-and-data-structures.
# Sorting Algorithms

This repository contains implementations of common sorting algorithms.  
Each algorithm has different characteristics in terms of **time complexity**, **space complexity**, and **use cases**.

##  1. Bubble Sort
**Idea:** Repeatedly swap adjacent elements if they are in the wrong order until the array is sorted.  
**Best Case:** `O(n)` (when already sorted)  
**Worst Case:** `O(n²)`  
**Space:** `O(1)` (in-place)  
**When to Use:** Only for educational purposes – very inefficient for large datasets.


##  2. Selection Sort
**Idea:** Repeatedly select the smallest element from the unsorted portion and put it at the beginning.  
**Best/Worst Case:** `O(n²)`  
**Space:** `O(1)` (in-place)  
**When to Use:** When memory writes are expensive (it makes only `n` swaps).



##  3. Insertion Sort
**Idea:** Build the sorted array one element at a time by inserting each element into its correct position.  
**Best Case:** `O(n)` (when nearly sorted)  
**Worst Case:** `O(n²)`  
**Space:** `O(1)` (in-place)  
**When to Use:** Good for small or nearly sorted datasets.



## 4. Merge Sort
**Idea:** Divide the array into halves, sort each half recursively, and then merge them back together.  
**Best/Worst Case:** `O(n log n)`  
**Space:** `O(n)` (requires extra memory for merging)  
**When to Use:** Stable and efficient for large datasets where memory usage is acceptable.



##  5. Quick Sort
**Idea:** Pick a pivot, partition the array into two parts (smaller and larger than pivot), then sort recursively.  
**Best Case:** `O(n log n)`  
**Worst Case:** `O(n²)` (if pivot is always the smallest/largest element)  
**Space:** `O(log n)` (recursive stack)  
**When to Use:** Often the fastest in practice for large datasets (with good pivot selection).

# Counting Sort

Counting Sort is a **non-comparative**, **integer-based** sorting algorithm.  
It works by counting the number of occurrences of each unique element in the input,  
then using this information to place elements in their correct sorted positions.



## 📌 How It Works

1. Find the **minimum** and **maximum** elements in the array.
2. Create a **count array** to store the frequency of each element.
3. Transform the count array into a **prefix sum array** (cumulative count).
4. Iterate over the original array and place each element in its correct position in the output array.
5. Copy the sorted result back into the original array (if sorting in-place is required).



##  Example

Suppose we have:

arr = [4, 2, 2, 8, 3, 3, 1]


 **Step 1:** Count occurrences  
  `count = [1, 0, 2, 2, 1, 0, 0, 1]` (for numbers 1–8)

 **Step 2:** Prefix sum  
  `count = [1, 1, 3, 5, 6, 6, 6, 7]`

 **Step 3:** Place elements  
  Result: `[1, 2, 2, 3, 3, 4, 8]`



##  Key Points

 **Time Complexity:** `O(n + k)`  
   `n` = number of elements  
   `k` = range of input values (max - min)
   **Space Complexity:** `O(n + k)` (extra space for count array)
 **Stable:** (if implemented properly — place elements in output array from right to left)

## Efficiency vs. Comparison Sorts

- Counting Sort is **faster** than comparison-based algorithms (`O(n log n)`) when:
- The **range `k` is small** relative to `n`.  
- Input data is **integers (or discrete values)** that can be mapped to indices.  

- It is **less efficient** when:
- `k` is very large (e.g., sorting numbers between 1 and 1 billion with only a few elements).  
- Memory usage becomes impractical due to large count arrays.



##  When to Use

 Works best when:
 The range of input values (`k`) is **not significantly larger** than the number of elements (`n`).
Input consists of **integers** (or can be mapped to integers).
Not efficient for data with a huge range (e.g., numbers up to 1 billion with only a few values).



##  Quick Example Code (JavaScript)

function countingSort(arr) {
  if (arr.length === 0) return arr;

  // Step 1: Find the min and max values
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Step 2: Initialize count array
  // We shift by 'min' to handle negative numbers
  let count = new Array(max - min + 1).fill(0);

  // Step 3: Count occurrences of each element
  for (let num of arr) {
    count[num - min]++;
  }

  // Step 4: Build prefix sum (cumulative count)
  // This tells us the "final position range" for each number in the sorted array
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Step 5: Build output array (stable placement)
  // Iterate from right to left so identical numbers keep their original order
  let output = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i];
    output[count[num - min] - 1] = num; // Place element at correct index
    count[num - min]--; // Decrement count to handle duplicates
  }

  return output;
}

//  Example usage
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));   // [1, 2, 2, 3, 3, 4, 8]
console.log(countingSort([-5, -10, 0, -3, 8, 5, -1])); // [-10, -5, -3, -1, 0, 5, 8]
