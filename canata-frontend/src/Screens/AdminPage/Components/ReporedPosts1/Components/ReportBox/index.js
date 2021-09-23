import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import user from "../../../../../../Assets/Admin/user.png";


function ReportBox() {

    const [record, setRecord] = useState([]);

    const loadReportDetail = async () => {
        var response = fetch('http://localhost:5000/api/v1/admin/getrepcovercount')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadReportDetail();
    }, []);

    return (
        <div>
            <table>
                {record.map((repcount) =>
                    <div class="card is-centered mt-6">
                        <header class="card-header">
                            <p class="card-header-title">
                                <div className="topuser mr-3">
                                    <img src={user} />
                                </div>   <td>
                                    {repcount.Email}
                                </td>
                            </p>
                            <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <td>
                                    Cover Title: {repcount.Title}
                                </td>
                                <br></br><br></br>
                                <td>
                                    Report Count : {repcount.Count}
                                </td>
                            </div>
                        </div>
                        <footer class="card-footer mr-3">


                            {/* <div className="refer"><Link to="./reportedposts2" className="card-footer-item mb-3">View</Link></div> */}
                            <td><div className="refer"><Link to={{ pathname: "reportedposts2", query: { cover_id: repcount.CoverId } }}  className="card-footer-item mb-3">View</Link></div></td> 

                        </footer>
                    </div>
                )}
            </table>
        </div>




    )
}

export default ReportBox;