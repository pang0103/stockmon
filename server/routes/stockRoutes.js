const express = require("express");
const router = express.Router();
const Axios = require("axios");

router.get("/", async (req, res) => {
  // console.log(req.params.ticker);
  if (req.query.ticker != null) {
    res.send(await getStockQuote(req.query.ticker));
  } else {
    res.status(400).send({ message: "bad request" });
  }
});

const getStockQuote = (ticker) => {
  let quote_API = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${process.env.ALPHAVATAGE_STOCK_API}`;
  return Axios.get(quote_API)
    .then((res) => res.data)
    .catch((err) => err);
};

module.exports = router;
