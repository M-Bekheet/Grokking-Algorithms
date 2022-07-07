/*
  hashTable:
  - Time Complexity: 
    - Avg time complexity is O(1) and it's called constant time because the time taken to process will stay the same.
    - Worst case is O(n)
  - Javascript Objects are an example of hashTables
  - It's a good algorithm for storing unsorted list, searching through them, or deleting some of them.
  - The examples below are not showing how to create hash tables, but the usage of them only as they are already built-in data structure in programming languages such as JS
*/

/* 
  > Example 1: getting price of products in a store
*/
const fruits = {
  apple: 30,
  banana: 25,
  mango: 45,
};
const getPrice = (fruit) => {
  if (fruits[fruit]) return `${fruit} price:  $${fruits[fruit]}`;
  return `${fruit} is not available`;
};

const addFruit = (fruit, price) => {
  if (fruits.hasOwnProperty(fruit))
    return console.log(`${fruit} is already exist`);
  fruits[fruit] = price;
  console.log(`${fruit} has been added successfully`);
};

console.log(getPrice('banana'));
console.log(getPrice('cherry'));

addFruit('cherry', 32);

// you cannot have duplicate items in hashTables, but you can change their values. The the addFruit above, we don't allow changing the price value though.
addFruit('cherry', 36);

//cherry still have the old value 32
console.log(getPrice('cherry'));

console.log(`
###
##
#
`);

/* 
  > Example 2: Check election voters
*/

const voters = {};

const addVoter = (voter) => {
  if (voters[voter]) console.log('Kick them out');
  else {
    voters[voter] = true;
    console.log('Let them vote');
  }
};

addVoter('Jackie');
addVoter('Adam');
addVoter('Jackie');
