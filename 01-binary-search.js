/*
  Binary Search: 
   - Time Complexity: O(log n)
    - Search for an item location in a `sorted` collection. And it must be sorted.

    - Example: 
    arr:[1,2,...,64] ==> tries: log(64) = 6 
*/

const binarySearch = (list, item) => {
  // initial values
  let low = 0;
  let high = list.length - 1;
  let tries = 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return { index: mid, tries, status: 'SUCCESS' };
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    tries++;
  }

  return { tries, status: 'FAIL' };
};

const list = [];
for (let i = 1; i <= 50; i++) list.push(i);

console.log(binarySearch(list, 13));
