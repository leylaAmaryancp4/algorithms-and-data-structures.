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

---

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


