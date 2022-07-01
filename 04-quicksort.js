/*
  Quicksort:
  - Time Complexity: O( n*log(n) ) 
  - Faster than the Selection Sort Algorithm which has O(n²)
  - It's a common algorithm for sorting
  - It uses the concept of Divide & Conquer. 
    - Define the base case: which is the part the recursive call comes to an end which is the solution of the call.
    - `Recursive case` which is when we call the function from the inside with different parameters till we reach the base case for the call
*/

const quicksort = (list) => {
  const length = list.length;

  if (length < 2) return list; // base case

  const pivot = list[0]; //popped out the for loop for clarity only and we can use list[0] in the loop instead
  const lowerThanPivot = [];
  const higherThanPivot = [];

  // i starts after the pivot index as we chose our pivot at index 0
  for (let i = 1; i < list.length; i++) {
    if (list[i] > pivot) higherThanPivot.push(list[i]);
    else lowerThanPivot.push(list[i]);
  }
  const result = [
    ...quicksort(lowerThanPivot),
    pivot,
    ...quicksort(higherThanPivot),
  ]; // recursive case

  return result;
};
const arr = [
  5, 6, 4, 38, 14, 9, 2, 1, 89, 8, 19, 54, 7, 22, 64, 15, 84, 55, 42,
];

console.time('Quicksort');
console.log(quicksort(arr));
console.timeEnd('Quicksort');
