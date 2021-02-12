import React, { useEffect, useState } from "react";

export default function StockPrice(props) {
  const [stockpriceX, setstockpriceX] = useState(0);
  const [stockpriceY, setstockpriceY] = useState(0);

  useEffect(() => {
    console.log("called");
  });

  return <div>{props.ticker}</div>;
}
