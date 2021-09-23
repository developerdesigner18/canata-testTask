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

function ReportedUsers2() {
    useEffect(() => {
        reports();
    }, []);


    const location = useLocation()
    const [record, setRecord] = useState([]);


    const userid = location.hasOwnProperty("query") ? location.query.user_id : null
    console.log("user id is" + userid)


    const reports = () => {
        axios.get(`http://localhost:5000/api/v1/admin/getrepuser/${userid}`)
            .then(response => {
                setRecord(response.data);
            });
    }

    const Ignore = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changestatus/${userid}`)
            .then(response => {
                window.location.href = "/admin/reportedusers1";
            });
    }

    const DeleteUser = () => {
        axios.get(`http://localhost:5000/api/v1/admin/changestatus/${userid}`)
            .then(response => {
                window.location.href = "/admin/reportedusers1";
            });
    }


    return (
        <div>
            <div><Link to="reportedusers1" ><img src={backarrow} /></Link></div>
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
                    <div class="content">
                        Joined Date :
                        <br></br><br></br>
                        First Name :
                        <br></br><br></br>
                        Last Name :
                        <br></br><br></br>
                        Email :
                    </div>

                    <ReportDetails />

                </div>
                <footer class="card-footer" style={{ marginRight: "25vh" }}>
                    <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={Ignore} >Ignore</a></div>
                    <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={DeleteUser}>Delete</a></div>
                </footer>
            </div>
        </div>

    )
}

export default ReportedUsers2;