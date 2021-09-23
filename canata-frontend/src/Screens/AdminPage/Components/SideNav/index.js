import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../../../Assets/Admin/logo2.png";
import dashbord from "../../../../Assets/Admin/dashboard.png";
import repcont from "../../../../Assets/Admin/repcontent.png";
import repuser from "../../../../Assets/Admin/repuser.png";
import usermgt from "../../../../Assets/Admin/usermgt.png";
import notify from "../../../../Assets/Admin/notify.png";
import edit from "../../../../Assets/Admin/account.png";
import lgout from "../../../../Assets/Admin/logout.png";

import './index.css';

const imgstyle = {
    paddingRight: "3vh"
}

function SideNav() {
    let { subpath } = useParams();


    return (


        <aside className="menu drawer-menu">

            <div className="navtop is-centered">
                <img src={logo} ></img>


            </div>

            <ul className="menu-list">
                <li><a className={subpath === "dashboard" ? "is-active" : ""}><Link to="dashboard"><img src={dashbord} style={imgstyle} />Dashboard</Link></a></li>
                <li><a className={subpath === "reportedposts1" ? "is-active" : "" || subpath === "reportedposts2" ? "is-active" : ""}><Link to="reportedposts1"><img src={repcont} style={imgstyle} />Reported Covers</Link></a></li>
                <li><a className={subpath === "reportedlyrics1" ? "is-active" : "" || subpath === "reportedlyrics2/:id" ? "is-active" : ""}><Link to="reportedlyrics1"><img src={repcont} style={imgstyle} />Reported Lyrics</Link></a></li>
                <li><a className={subpath === "reportedusers1" ? "is-active" : "" || subpath === "reportedusers2" ? "is-active" : ""}><Link to="reportedusers1"><img src={repuser} style={imgstyle} />Reported Users</Link></a></li>
                <li><a className={subpath === "usermanagement" ? "is-active" : ""}><Link to="usermanagement"><img src={usermgt} style={imgstyle} />User Management</Link></a></li>
                <li><a className={subpath === "notification" ? "is-active" : ""}><Link to="notification"><img src={notify} style={imgstyle} />Notifications</Link></a></li>
                <li><a className={subpath === "accountmanagement" ? "is-active" : ""}><Link to="accountmanagement"><img src={edit} style={imgstyle} />Account</Link></a></li>
                <li><a><Link to="\"><img src={lgout} style={imgstyle} />Logout</Link></a></li>
            </ul>

        </aside>
    )
}

export default SideNav;


