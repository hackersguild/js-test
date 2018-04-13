/* Use profile destructuring to capture the first and last name of the profile
 * */
const profile = {
  fname: "Ryan",
  lname: "Cromwell",
  bday: new Date("1979-01-02")
};

const { fname, lname } = profile;

console.log(fname, lname); // Ryan Cromwell
