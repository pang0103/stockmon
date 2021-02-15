const express = require("express");
const router = express.Router();
const Twit = require("twit");

const T = new Twit({
  consumer_key: process.env.TWITTER_API_key,
  consumer_secret: process.env.TWITTER_API_secret_key,
  access_token: process.env.TWITTER_API_access_token,
  access_token_secret: process.env.TWITTER_API_acccess_token_secret,
});

(async = () => {
  //   T.get("search/tweets", { q: "$TSLA", count: 5 }, (err, data, response) => {
  //     const tweets = data.statuses.map((tweet) => tweet.text);
  //     console.log(tweets);
  //   });
  //   var stream = T.stream("statuses/filter", { track: "$TSLA" });
  //   stream.on("tweet", (tweet) => {
  //     console.log(tweet.text);
  //     console.log("---------");
  //   });
})();

module.exports = router;
