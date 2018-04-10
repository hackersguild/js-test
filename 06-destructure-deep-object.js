/* Use object destructuring to capture the twitter link of the profile object
 * */
var profile = {
  fname: 'Ryan',
  lname: 'Cromwell',
  social: {
    twitter: "https://twitter.com/oliviermani",
    instagram: "https://www.facebook.com/olivierjm"
  }
}

var twitter = profile.social.twitter;

console.log(twitter); // https://twitter.com/oliviermani
