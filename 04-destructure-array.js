/* Use array destructuring to capture the
 * first and third elements of the array
 * */
const values = [1, 2, 3, 4];

const [first, , third] = values;

console.log(first, third); // 1 3
