import React, { useState, useEffect, useRef } from "react";
import ApexCharts from "react-apexcharts";

export default function HistoryChart(props) {
  const [chartData, setchartData] = useState([]);

  const [chartSetting, setchartSetting] = useState({
    options: {
      chart: {
        type: "candlestick",
        height: 500,
      },
      title: {
        align: "left",
      },
      xaxis: {},
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  useEffect(() => {
    console.log("loaded");
  });

  useEffect(() => {
    if (props.quote && props.quote != null) {
      for (var key in props.quote["Time Series (Daily)"]) {
        let quote_open = parseFloat(
          props.quote["Time Series (Daily)"][key]["1. open"]
        );
        let quote_high = parseFloat(
          props.quote["Time Series (Daily)"][key]["2. high"]
        );
        let quote_low = parseFloat(
          props.quote["Time Series (Daily)"][key]["3. low"]
        );
        let quote_close = parseFloat(
          props.quote["Time Series (Daily)"][key]["4. close"]
        );

        let quote = {
          x: key,
          y: [quote_open, quote_high, quote_low, quote_close],
        };
        //setchartData([...chartData, quote]);
        setchartData((oldquote) => [...oldquote, quote]);
      }
    } else {
      console.log("Not loaded yt");
    }

    return () => {
      setchartData([]);
    };
  }, [props.quote]);

  var settings = {
    options: {
      chart: {
        type: "candlestick",
        height: 500,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {},
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  return (
    <div>
      <ApexCharts
        options={chartSetting.options}
        series={[{ data: chartData }]}
        type="candlestick"
      />
    </div>
  );
}
