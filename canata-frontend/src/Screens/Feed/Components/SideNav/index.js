import React from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../../../../Assets/Admin/Icon.png";
import notify from "../../../../Assets/Admin/notify.png";
import edit from "../../../../Assets/Admin/account.png";
import lgout from "../../../../Assets/Admin/logout.png";
import home from "../../../../Assets/Admin/home.png";
import { FaHome } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import './index.css';
import MainPage from "../MainPage";


const imgstyle = {
    paddingRight: "3vh",
    verticalAlign: "middle"
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
                <img src={Icon} ></img>

            </div>

            <ul className="menu-list side">
                <li><p className={subpath === "MainPage" ? "is-active" : ""}><Link to="MainPage"><FaHome/>  <span className="side-letters" style={sideNavLetters}>Home</span></Link></p></li>
                <li><p className={subpath === "RecentlyPlayed" ? "is-active" : ""}><Link to="RecentlyPlayed"><FaPlay/> <span className="side-letters" style={sideNavLetters}>Recently Played</span></Link></p></li>
                <li><p className={subpath === "PlayLists" ? "is-active" : ""}><Link to="PlayLists"> <FaAlignLeft/> <span className="side-letters" style={sideNavLetters}>Playlists</span></Link></p></li>
                <li><p className={subpath === "PostLyrics" ? "is-active" : ""}><Link to="PostLyrics"><FaUpload/> <span className="side-letters" style={sideNavLetters}>Post Lyrics</span></Link></p></li>
                <li><p className={subpath === "UserProfile" ? "is-active" : ""}><Link to="UserProfile"><FaUserAlt/> <span className="side-letters" style={sideNavLetters}>Account</span></Link></p></li>
                <li><p><Link to="\"><FaSignOutAlt/> <span className="side-letters" style={sideNavLetters}>Logout</span></Link></p></li>
            </ul>

        </aside>
    )
}

export default SideNav;