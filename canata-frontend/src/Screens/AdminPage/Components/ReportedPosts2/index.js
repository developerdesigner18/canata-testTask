import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import ReportDetails from "./Components/ReportDetails";
import user from "../../../../Assets/Admin/user.png";
import backarrow from "../../../../Assets/Admin/backarrow.png";
import "./index.css";


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

function ReportedPosts2() {
    useEffect(() => {
        reports();
    }, []);


    const location = useLocation()
    const [record, setRecord] = useState([]);


    const coverid = location.hasOwnProperty("query") ? location.query.cover_id : null
    // console.log("user id is" + userid)


    const reports = () => {
        axios.get(`http://localhost:5000/api/v1/admin/getrepcover/${coverid}`)
            .then(response => {
                setRecord(response.data);
            });
    }

    const Ignore = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changecoverstatus/${coverid}`)
            .then(response => {
                window.location.href = "/admin/reportedposts1";
            });
    }

    const DeletePost = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changecoverstatus/${coverid}`)
            .then(response => {
                window.location.href = "/admin/reportedposts1";
            });
    }



    return (
        <div>
            <div><Link to="reportedposts1" ><img src={backarrow} /></Link></div>
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
                        Posted Date :
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

export default ReportedPosts2;