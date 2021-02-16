const sampleData = {
  "Meta Data": {
    "1. Information": "Daily Time Series with Splits and Dividend Events",
    "2. Symbol": "aapl",
    "3. Last Refreshed": "2021-02-12",
    "4. Output Size": "Compact",
    "5. Time Zone": "US/Eastern",
  },
  "Time Series (Daily)": {
    "2021-02-12": {
      "1. open": "134.35",
      "2. high": "135.53",
      "3. low": "133.6921",
      "4. close": "135.37",
      "5. adjusted close": "135.37",
      "6. volume": "60145130",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0",
    },
    "2021-02-11": {
      "1. open": "135.9",
      "2. high": "136.39",
      "3. low": "133.77",
      "4. close": "135.13",
      "5. adjusted close": "135.13",
      "6. volume": "64280029",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0",
    },
  },
};

const data = sampleData["Time Series (Daily)"];

for (var key in sampleData["Time Series (Daily)"]) {
  console.log(key);
  console.log(sampleData["Time Series (Daily)"][key]["1. open"]);
  console.log(sampleData["Time Series (Daily)"][key]["2. high"]);
  console.log(sampleData["Time Series (Daily)"][key]["3. low"]);
  console.log(sampleData["Time Series (Daily)"][key]["4. close"]);
}
