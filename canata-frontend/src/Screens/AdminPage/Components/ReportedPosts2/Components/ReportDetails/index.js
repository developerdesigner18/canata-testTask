import {  useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";



const bx = {
    backgroundColor: "rgb(211, 211, 211)",
  height: "200%"
  

 }


function ReportDetails() {
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



    return (

        <div>
             <table>
                {record.map((reports) =>
            <div class="card is-centered mt-6">
              
                <div class="card-content" style={bx}>
                    <div class="content">
                    <td> Reported By :{reports.Email}</td>
                        <br></br><br></br>
                        <td>Reason :{reports.Reason}</td>
                    </div>
                </div>
                
            </div>
              )}
              </table>
        </div>

    )
}

export default ReportDetails;