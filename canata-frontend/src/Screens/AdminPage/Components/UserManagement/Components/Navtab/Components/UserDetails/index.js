import React, { useState, useEffect } from "react";
import axios from "axios";
import searchimg from "../../../../../../../../Assets/Admin/search.png";



function UserDetails() {

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
    const [email, setEmail] = useState('');


    const txt = {
        width: "50%"
    }

    const btn = {
        backgroundColor: "white",
        width: "5%",
        height: "5.3vh",
        border: "none",
        borderRadius: "3px",

    }
    const msg = {
        width: "100%"
    }

    const searchRecords = () => {
        axios.get(`http://localhost:5000/api/v1/user/searchUser/${search}`)
            .then(response => {
                setRecord(response.data);
            });
    }
    const activate = () => {
        axios.get(`http://localhost:5000/api/v1/user/activateUser/${email}`)
            .then(
                window.location.reload()
            );
    }

    const deactivate = () => {
        axios.get(`http://localhost:5000/api/v1/user/deactivateUser/${email}`)
            .then(
                window.location.reload()
            );
    }

    return (
        <div>

            <nav class="level">
                <div class="level-item  is-centered">
                    <div class="card" style={msg}>

                        <div class="card-content">
                            <article class="message">
                                <p class="title is-6">User Details</p><br></br>
                                <div class="message-body">
                                    User Email:<div class="control"></div><input class="input is-hovered" id="emai" type="text" style={txt} onChange={(e) => setSearch(e.target.value)} />
                                    <button style={btn} onClick={searchRecords}><img src={searchimg} /></button>
                                    <br></br><br></br>


                                    <div class="table-container">
                                        <table class="table">
                                            <tr>
                                                <td>User Id</td>
                                                {record.map((user) =>

                                                    <td>{user.UserId}</td>

                                                )}
                                            </tr>

                                            <tr>
                                                <td>Name</td>
                                                {record.map((user) =>

                                                    <td>{user.Fname}  {user.Lname}</td>

                                                )}
                                            </tr>

                                            <tr>
                                                <td>Joined At</td>
                                                {record.map((user) =>

                                                    <td>{user.CreatedAt}</td>

                                                )}
                                            </tr>
                                            <tr>
                                                <td>Active Status</td>
                                                {record.map((user) =>

                                                    <td>{user.ActiveStatus}</td>

                                                )}
                                            </tr>
                                        </table>
                                    </div>

                                </div>

                            </article>
                            <br></br>
                            <article class="message"> <br></br>
                                <p class="title is-6 ml-4">Manage Users</p>
                                <div class="message-body">
                                    User Email:<div class="control"><input class="input is-hovered" type="text" style={txt} onChange={(e) => setEmail(e.target.value)} ></input></div>
                                    <br></br>
                                    <button onClick={() => { activate() }}>
                                        Activate
                                    </button>
                                    <button onClick={() => { deactivate() }}>
                                        Deactivate
                                    </button>

                                </div>
                            </article>


                        </div>

                    </div>
                </div>



            </nav>
        </div>
    )
}
export default UserDetails;