/*
 1. Write a function that when given an array sums only the odd values
  and returns that sum. Assume the array is an array of integers.
*/
const oddSum = array => {
  return array.reduce((prev, curr) => (curr % 2 ? prev + curr : prev), 0);
};

// console.log(oddSum([1, 2, 3, 4, 9]));
// 2. Given the following array, create a function that when you pass it students
// array with the passing mark, it returns the names of the students who passed;
// consdider using filters and the es6 map

var students = [
  {
    name: "corey",
    score: 89
  },
  {
    name: "rachel",
    score: 95
  },
  {
    name: "alex",
    score: 91
  },
  {
    name: "John",
    score: 76
  },
  {
    name: "Heck",
    score: 90
  }
];

const passing = (array, grade) => {
  const passingStudent = [];
  array.filter(a => {
    if (a.score >= grade) {
      return passingStudent.push(a.name);
    }
  });
  return passingStudent;
};

// example of returning a boolean
const isBigEnough = value => value >= 10;

// console.log(isBigEnough(15));

const passing_again = (array, grade) => {
  return array.filter(a => a.score >= grade).map(a => a.name);
};

// both methods should be able to work
// console.log(passing(students, 90));
console.log(passing_again(students, 90));
/*
3. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
  Sample Output:
  "0 is even"
  "1 is odd"
  "2 is even"
 */
for (let x = 0; x <= 15; x++) {
  x % 2 === 0 ? console.log(`${x} is even`) : console.log(`${x} is odd`);
}
