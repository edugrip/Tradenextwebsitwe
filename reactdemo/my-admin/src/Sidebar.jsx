import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
    return <> <div className="border-right" id="sidebar-wrapper">
      <div className="sidebar-heading logo"><a href="#"><img src="logo.png"></img></a></div>
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action" to="/"> Dashboard</Link>
        <Link className="list-group-item list-group-item-action" to="/Profile"> Profile</Link>
        <Link className="list-group-item list-group-item-action" to="/Stakes"> Stakes</Link>
        <Link className="list-group-item list-group-item-action" to="/Wallet"> Wallet</Link>
        <Link className="list-group-item list-group-item-action" to="/Events"> Events</Link>
       
        <Link className="list-group-item list-group-item-action" to="/Status">Status</Link>
       


      </div>
    </div>
     </>

}
export default Sidebar;