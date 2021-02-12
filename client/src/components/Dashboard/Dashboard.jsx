import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Appbar from "../Appbar/Appbar";

export default function Dashboard(props) {
  return (
    <div>
      <Sidebar />
      <Appbar />
    </div>
  );
}
