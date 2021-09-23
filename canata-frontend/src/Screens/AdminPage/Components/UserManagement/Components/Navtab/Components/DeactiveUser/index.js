import React, { useState, useEffect } from "react";
import axios from "axios";


function DeactiveUser() {
    
    const btn = {
        backgroundColor: "rgb(72, 95, 199)",
        color:"white",
        width: "100%",
        height: "5vh",
        borderRadius: "3px",
        border:"thin"

    }

    const tbl = {
        width: "100%"
    }
    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);



    // On Page load display all records 
    const loadEmployeeDetail = async () => {
        var response = fetch('http://localhost:5000/api/v1/user/deactive')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadEmployeeDetail();
    }, []);

    const activate = (id) => {       
            console.log("deac  "+id);          
        axios.get(`http://localhost:5000/api/v1/user/activateUser/${id}`)
            .then(
                window.location.reload()
            );
    }



    return (
        <div>
            <table class="table" style={tbl}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Joined Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {record.map((users) =>
                        <tr>
                            <td>{users.UserId}</td>
                            <td>{users.Email}</td>
                            <td>{users.Fname} {users.Lname}</td>
                            <td>{users.CreatedAt}</td>
                            <td><button style={btn} onClick={() => {  activate(users.Email)}}>Activate</button></td>
                            {/* <td><button style={btn} onClick={() => deac(users.Email)}>Activate</button></td> */}


                        </tr>
                    )}
                </tbody>
                
                {/* <tbody>
                    <tr>
                        <td>U001</td>
                        <td>sashini@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U002</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U003</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U004</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U005</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U006</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                    <tr>
                        <td>U007</td>
                        <td>shihara@gmail.com</td>
                        <td>Sashini</td>
                        <td>Shihara</td>
                        <td>12/02/2021</td>
                        <td>12/08/2021</td>
                        <td><button style={btn}>Activate</button>
                        </td>
                    </tr>

                </tbody> */}
            </table>
        </div>
    )
}

export default DeactiveUser;