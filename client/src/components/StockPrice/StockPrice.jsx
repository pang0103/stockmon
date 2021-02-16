import React, { useEffect, useState } from "react";
import HistoryChart from "./HistoryChart";
import Axios from "axios";

export default function StockPrice(props) {
  const [stockQuote, setstockQuote] = useState();

  useEffect(() => {
    console.log("called");
  });

  useEffect(() => {
    if (props.ticker != null) {
      Axios.get(`http://ccp.zone:3001/stock?ticker=${props.ticker}`).then(
        (res) => {
          setstockQuote(res.data);
        }
      );
    }
  }, [props.ticker]);

  return (
    <div>
      <HistoryChart ticker={props.ticker} quote={stockQuote}></HistoryChart>
    </div>
  );
}
