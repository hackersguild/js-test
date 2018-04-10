/* Use an ES6 Class to construct a Person instance.
 * */
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

var john = new Person('Hackers', 'Guild');
var jack = new Person('Coders', 'Guild');

console.log(john); // Person { fname: 'Hackers', lname: 'Guild' }
console.log(john.fname); // Hackers
