import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ReportDetails from "./Components/ReportDetails";
import user from "../../../../Assets/Admin/user.png";
import backarrow from "../../../../Assets/Admin/backarrow.png";
import "./index.css";
import axios from "axios";



const bx = {
    backgroundColor: "white",
    height: "20vh",
    width: "110vh",
    borderStyle: "solid",
    borderWidth: "thin",
    margin: "auto"
}

const foot = {

    borderStyle: "solid",
    borderWidth: "thin",
}


function ReportedLyrics2(props) {

    const location = useLocation()

    const lyricid=location.hasOwnProperty("query")?location.query.ly_id:null
    

    const getLyrics=() =>{}

    const Ignore = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changelyricstatus/${lyricid}`)
            .then(response => {
                window.location.href = "/admin/reportedlyrics1";
            });
    }

    const DeletePost = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changelyricstatus/${lyricid}`)
            .then(response => {
                window.location.href = "/admin/reportedlyrics1";
            });
    }


    return (
        <div>
            <div><Link to="reportedlyrics1" ><img src={backarrow} /></Link></div>
            <div class="card is-centered mt-6 ml-6">
                <header class="card-header">
                    <p class="card-header-title">
                        <div className="topuser mr-3">
                            <img src={user} />
                        </div>  Account Name
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    <div class="content" style={bx} >
                        <p class="rep mt-6" style={{ textAlign: "center" }}>
                            Lyric / Cover
                        </p>
                    </div><br></br><br></br>
                    <div class="content">
                        Posted Date :{lyricid || "user invaild"}
                        <br></br><br></br>
                        Description :
                        <br></br><br></br>
                        Tags :
                    </div>

                    <ReportDetails />

                </div>
                <footer class="card-footer" style={{ marginRight: "25vh" }}>
                <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={Ignore} >Ignore</a></div>
                    <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={DeletePost}>Delete</a></div>
             </footer>
            </div>
        </div>

    )
}

export default ReportedLyrics2;