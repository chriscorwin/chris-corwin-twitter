var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

// console.log("process.env.BOT_CONSUMER_KEY", process.env.BOT_CONSUMER_KEY);
// console.log("process.env.BOT_CONSUMER_SECRET", process.env.BOT_CONSUMER_SECRET);
// console.log("process.env.BOT_ACCESS_TOKEN", process.env.BOT_ACCESS_TOKEN);
// console.log("process.env.BOT_ACCESS_TOKEN_SECRET", process.env.BOT_ACCESS_TOKEN_SECRET);

var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [ "hey twitter",
                    "im tweeting",
                    "tweet tweet",
                    "tweetstorm time... 1/22",
                    "plz RT v important",
                    "delete ur account",
                    "it me",
                    "same",
                    "#dogpants go on 4 legs!!",
                    "#heckyesfishjenga",
                    "#thedress is blue and black" ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);
Bot.tweet(phrase);