import React, { useEffect, useState } from "react";
import Quotedetials from "./Quotedetials";
import HistoryChart from "./HistoryChart";
import CompanyOverview from "./CompanyOverview";

import Axios from "axios";

export default function StockPrice(props) {
  const [stockQuote, setstockQuote] = useState();
  const [companyOverview, setcompanyOverview] = useState();

  useEffect(() => {
    if (props.ticker != null) {
      Axios.get(`http://ccp.zone:3001/stock?ticker=${props.ticker}`).then(
        (res) => {
          setcompanyOverview(res.data[0]);
          setstockQuote(res.data[1]);
        }
      );
    }
  }, [props.ticker]);

  return (
    <div>
      {/* <Quotedetials ticker={props.ticker} details={companyOverview} /> */}
      <CompanyOverview ticker={props.ticker} details={companyOverview} />
      <HistoryChart ticker={props.ticker} quote={stockQuote}></HistoryChart>
    </div>
  );
}
