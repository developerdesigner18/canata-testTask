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


    const userid = location.hasOwnProperty("query") ? location.query.user_id : null
    console.log("user id is" + userid)


    const reports = () => {
        axios.get(`http://localhost:5000/api/v1/admin/getrepuser/${userid}`)
            .then(response => {
                setRecord(response.data);
            });
    }


    return (

        <div>
        <table>
           {record.map((report) =>
       <div class="card is-centered mt-6">
         
           <div class="card-content" style={bx}>
               <div class="content">
               <td> Reported By :{report.Email}</td>
                   <br></br><br></br>
                   <td>Reason :{report.Reason}</td>
               </div>
           </div>
           
       </div>
         )}
         </table>
   </div>

    )
}

export default ReportDetails;