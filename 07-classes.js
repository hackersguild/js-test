/* Use an ES6 Class to construct a Person instance.
 * */

class Person {
  constructor(firstname, lastname) {
    this.fname = firstname;
    this.lname = lastname;
  }
}
const john = new Person("Hackers", "Guild");
const jack = new Person("Coders", "Guild");
console.log(john); // Person { fname: 'Hackers', lname: 'Guild' }
console.log(john.fname); // Hackers
