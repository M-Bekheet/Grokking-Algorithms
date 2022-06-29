/**
  Recursion:
  - Time Complexity: It depends and the factorial example here has O(n)
  - It is when a function call itself from the inside with different argument
  - It consists of 2 parts:
    - `Recursive case` which is when we call the function from the inside
    - `Base case` which is when we set a condition to stop the series of calls
*/

const factorial = (x) => {
  console.log({ x });
  if (x <= 1) return 1; // base case
  return x * factorial(x - 1); // recursive base
};

console.log(factorial(5));
