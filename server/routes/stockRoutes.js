const express = require("express");
const router = express.Router();
const Axios = require("axios");

router.get("/", async (req, res) => {
  if (req.query.ticker != null) {
    res.send(await getStockQuote(req.query.ticker));
  } else {
    res.status(400).send({ message: "bad request" });
  }
});

const getStockQuote = async (ticker) => {
  let get_quote = Axios.get(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.ALPHAVATAGE_STOCK_API}`
  );
  let get_hist = Axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${process.env.ALPHAVATAGE_STOCK_API}`
  );
  let get_overview = Axios.get(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.ALPHAVATAGE_STOCK_API}`
  );

  //let quote;
  let hist;
  let overview;

  let result = [];

  await Axios.all([get_overview, get_hist])
    .then(
      Axios.spread((...res) => {
        console.log(res.length);
        //quote = res[0].data;
        overview = res[0].data;
        hist = res[1].data;
      })
    )
    .catch((err) => err);

  return [overview, hist];
};

// const getStockQuote = (ticker) => {
//   let history_API = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${process.env.ALPHAVATAGE_STOCK_API}`;
//   let overview_API = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.ALPHAVATAGE_STOCK_API}`;

//   return Axios.all(history_API)
//     .then((res) => res.data)
//     .catch((err) => err);
// };

module.exports = router;
