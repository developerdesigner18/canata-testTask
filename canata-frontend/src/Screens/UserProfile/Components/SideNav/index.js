import React from "react";
import { Link, useParams } from "react-router-dom";
import icon from "../../../../Assets/Admin/Icon.png";
import user from "../../../../Assets/Admin/repuser.png";
import usermgt from "../../../../Assets/Admin/usermgt.png";
import notify from "../../../../Assets/Admin/notify.png";
import lgout from "../../../../Assets/Admin/logout.png";

import './index.css';
import { Icon } from "@material-ui/core";

const imgstyle = {
    paddingRight: "3vh"
}

const sideNavLetters = {
    color: "#ffdd57",
    "&:hover": { color: "#0000" }
}

function SideNav() {
    let { subpath } = useParams();


    return (


        <aside className="menu drawer-menu">

            <div className="nav-top is-centered">
                <img src={icon} ></img>


            </div>


            <ul className="menu-list side">
                <li><a className={subpath === "./index.js" ? "is-active" : ""}><Link to="UserProfile"><img src={user} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>User Profile</span></Link></a></li>
                <li><a className={subpath === "../EditProfile/index.js" ? "is-active" : ""}><Link to="editprofile"><img src={usermgt} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Edit Profile</span></Link></a></li>
                <li><a className={subpath === "../Notification/index.js" ? "is-active" : ""}><Link to="notification"><img src={notify} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Notification</span></Link></a></li>
                <li><a><Link to="/"><img src={lgout} style={imgstyle} /><span className="side-letters" style={sideNavLetters}>Logout</span></Link></a></li>

            </ul>

        </aside>
    )
}

export default SideNav;

