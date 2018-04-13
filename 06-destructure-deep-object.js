/* Use object destructuring to capture the twitter link of the profile object
 * */
const profile = {
  fname: "Ryan",
  lname: "Cromwell",
  social: {
    twitter: "https://twitter.com/oliviermani",
    instagram: "https://www.facebook.com/olivierjm"
  }
};

// const twitter = profile.social.twitter;
const { social: { twitter } } = profile;
console.log(twitter); // https://twitter.com/oliviermani
