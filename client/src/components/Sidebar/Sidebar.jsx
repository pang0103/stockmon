import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import "./Sidebar.css";

export default function sidebar() {
  return <div className="sideBarContainer">
    <div className="flexRow">
      <div className="flexCol sideBar">
        <div className="sideBarTitle">
          <h3>SideBar</h3>
        </div>
        <div className="flexCol sideBarButtonContainer">
          <div className="sideBarButton">
          <Button  variant="outlined" color="primary">
            Button 1
          </Button>
          </div>
          <div className="sideBarButton">
          <Button  variant="outlined" color="primary">
            Button 2
          </Button>
          </div>
          <div className="sideBarButton">
          <Button  variant="outlined" color="primary">
            Button 3
          </Button>
          </div>
          
        </div>

      </div>
      <div className="content">
        <h3 style={{textAlign: 'center'}}>This is content</h3>
      </div>

    </div>

  </div>;
}
