const express = require("express");
const cors = require("cors");
const Axios = require("axios");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const stockRoutes = require("./routes/stockRoutes");
const tweetRoutes = require("./routes/tweetRoutes");

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server started. PORT ${PORT}`);
});

app.use((req, res, next) => {
  // log each request to the console
  console.log(req.method, req.url);
  // JWT Auth
  next();
});

app.use("/stock", stockRoutes);
app.use("/tweet", tweetRoutes);

// getStockQuote("AAPL");

// const T = new Twit({
//   consumer_key: process.env.TWITTER_API_key,
//   consumer_secret: process.env.TWITTER_API_secret_key,
//   access_token: process.env.TWITTER_API_access_token,
//   access_token_secret: process.env.TWITTER_API_acccess_token_secret,
// });

// (async = () => {
//   //   T.get("search/tweets", { q: "$TSLA", count: 5 }, (err, data, response) => {
//   //     const tweets = data.statuses.map((tweet) => tweet.text);
//   //     console.log(tweets);
//   //   });

//   var stream = T.stream("statuses/filter", { track: "$CCIV" });

//   stream.on("tweet", (tweet) => {
//     console.log(tweet.text);
//     console.log("---------");
//   });
// })();
