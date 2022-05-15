function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

/* 
KATA DESCRIPTION

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
ß
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions

You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing

We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

PSUEDO
  Write a function that would allow you to pass in array and get the sum of the passed in values. 

reduce takes elements from the left of the arrays one by one, each time "merges" them with a initial value by a function. The function here is in arrow function notation:

(a,b)=>a+b //Given argument a and b, calculate and return a+b
The initial value can be provided as the second arguments (0), or in case it doesn't exist, takes from the first element. It's usually provided for stability when you only have one item in the array.

The steps it works are roughly the following:

[1,2,3,4].reduce((a, b) => a + b, 0);
(0),1,2,3,4
=>
(0+1),2,3,4
=>
(1),2,3,4
=>
(1+2),3,4
=>
(3),3,4
...
(6),4
=>
10
*/

