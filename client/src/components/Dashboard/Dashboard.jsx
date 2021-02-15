import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Appbar from "../Appbar/Appbar";
import StockPrice from "../StockPrice/StockPrice";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard(props) {
  const [stockticker, setstockticker] = useState(null);

  const setTicker = (ticker) => {
    setstockticker(ticker);
    console.log("dash " + ticker);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <Appbar ticker={setTicker} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <StockPrice ticker={stockticker} />
      </main>
    </div>
  );
}
