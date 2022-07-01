/**
  Selection Sort:
  - Time Complexity: O(n²)
  - It is used to sort lists in order, but the 
  - Runtime is not the best and there are native methods in programming languages for sorting
*/

const findSmallestNumber = (list) => {
  let smallestNumber = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < smallestNumber) smallestNumber = list[i];
  }
  return smallestNumber;
};

const selectionSort = (myList) => {
  // taking a copy of the array as the splice method below will remove items from the copy and we don't want the original array changed
  const list = [...myList];

  const sortedList = [];

  for (let i = 0; i < myList.length; i++) {
    const smallestNumber = findSmallestNumber(list);
    //remove the smallest number found after it pushing to the sortedList
    sortedList.push(...list.splice(list.indexOf(smallestNumber), 1));
  }
  return sortedList;
};

const arr = [
  5, 6, 4, 38, 14, 9, 2, 1, 89, 8, 19, 54, 7, 22, 64, 15, 84, 55, 42,
];

console.time('Selection Sort');
console.log(selectionSort(arr));
console.timeEnd('Selection Sort');
