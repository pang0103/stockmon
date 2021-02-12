import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Appbar from "../Appbar/Appbar";
import App from "../../App";

export default function Dashboard(props) {
  return (
    <div>
      <Sidebar></Sidebar>
      <Appbar></Appbar>
    </div>
  );
}
