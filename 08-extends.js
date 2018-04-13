/* Use ES6 class `extends` syntax to construct a Developer class with
 * preferred language. Use `super` to initialize the firstname and lastname.
 * */

class Person {
  constructor(firstname, lastname) {
    this.fname = firstname;
    this.lname = lastname;
  }
}

class Developer extends Person {
  constructor(firstname, lastname, preferredLanguage) {
    super(firstname, lastname);
    this.preferredLanguage = preferredLanguage;
  }
}

var jen = new Developer("John", "Doe", "Javascript");

console.log(jen.fname); // 'John'
console.log(jen.preferredLanguage); // 'Javascript'
