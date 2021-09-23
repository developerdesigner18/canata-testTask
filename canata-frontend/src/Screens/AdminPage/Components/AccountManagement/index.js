import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


function AccountManagement() {
    const txt = {
        width: "300pt"
    }

    const bt = {
        padding: "8px 28px",
        borderRadius: "20px",
        lineHeight: "24px",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: ".02em",
        border: "none",
        outline: "none",
        overflow: "hidden",
        background: "#275EFE",
        position: "relative",
        marginLeft: "100vh"
    }

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);


    const getAdmin = () => {
        axios.get(`http://localhost:5000/api/v1/admin/getadmin`)
            .then(response => {
                setRecord(response.data);
                console.log(record.map.AdminId);
            });
    }
    useEffect(() => {
        getAdmin();
    }, []);

    // var emailval = ((document.getElementById("email")||{}).defaultValue)||"";
    // alert(emailval);

    // var emailval= document.getElementById("email").defaultValue;
    // var fnameval= document.getElementById("fname").defaultValue;
    // var lnameval=document.getElementById("lname").defaultValue;

    const [admin, setAdmin] = useState({
        email: "",
        fname: "",
        lname: ""
    });

    const { email, fname, lname } = admin;
    const onInputChange = e => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };



    const editDetails = async (e) => {
        // e.preventDefault();
        // e.target.reset();
        await axios.post("http://localhost:5000/api/v1/admin/editdetails", admin)
            .then((data) => {
                console.log(data.data.data);
                if (data.data.data != null) {
                    Swal.fire({
                        icon: "success",
                        title: "Sent",
                        text: "Details Edited Succesfully!",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Editing Failed!",
                    });
                }
            });


    };


    const [password, setPassword] = useState({
        oldpass: "",
        newpass: "",
        conf: ""
    });

    const { oldpass, newpass, conf } = password;
    const onPasswordChange = e => {
        setPassword({ ...password, [e.target.name]: e.target.value });

    };

    const vaildate = async (e) => {
        if (newpass !== oldpass) {
            alert("Passwords do not match!");
        }
    }


    const editPassword = async (e) => {
        if (newpass !== conf) {
            alert("Passwords do not match!");
        }
        else {
            await axios.post("http://localhost:5000/api/v1/admin/checkadmin", password)
                .then((data) => {
                    console.log(data.data.data);
                    if (data.data.data != null) {

                        axios.post("http://localhost:5000/api/v1/admin/changepassword", password)
                            .then((data) => {
                                console.log(data.data.data);
                                if (data.data.data != null) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Sent",
                                        text: "Password Changed Succesfully!",
                                    });
                                } else {
                                    Swal.fire({
                                        icon: "error",
                                        title: "Oops...",
                                        text: "Password not changed! Please try again.",
                                    });
                                }
                            });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Wrong Password! Please try again.",
                        });
                    }
                });

        }
    };


    return (
        <div>
            <div class="card is-centered mt-6 ml-6">
                <header class="card-header">
                    <p class="card-header-title">
                        Account Settings
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    {/* <article class="message"> <br></br>
                        <p class="title is-6 ml-4">Account Details</p>
                        <div class="message-body">
                            <table class="table">
                                <tr>
                                    <td>Admin Id</td>
                                    {record.map((admin) =>

                                        <td contenteditable='true'>{admin.Email}</td>

                                    )}
                                </tr>

                                <tr>
                                    <td>First Name</td>
                                    {record.map((admin) =>

                                        <td contenteditable='true'>{admin.Fname}</td>

                                    )}
                                </tr>

                                <tr>
                                    <td>Last Name</td>
                                    {record.map((admin) =>

                                        <td contenteditable='true'>{admin.LName}</td>

                                    )}
                                </tr>

                            </table>
                        </div>

                    </article>
                     */}
                    <article class="message"> <br></br>
                        <p class="title is-6 ml-4">Account Details</p>
                        <div class="message-body">
                            <table>{record.map((admin) =>
                                <td>Email:<div class="control" id="email"><input class="input is-hovered" type="text" id="email" name="email" style={txt} defaultValue={admin.Email} onChange={e => onInputChange(e)}></input></div>
                                </td>)} </table>
                            <br></br>
                            <table>{record.map((admin) =>
                                <td>First Name:<div class="control"><input class="input is-hovered" type="text" id="fname" name="fname" style={txt} defaultValue={admin.Fname} onChange={e => onInputChange(e)}></input></div>
                                </td>)} </table>
                            <br></br>
                            <table>{record.map((admin) =>
                                <td>Last Name:<div class="control"><input class="input is-hovered" type="text" id="lname" name="lname" style={txt} defaultValue={admin.LName} onChange={e => onInputChange(e)}></input></div>
                                </td>)} </table>
                            <br></br>
                            <section> <div class="field is-grouped">
                            <p class="control">
                                <button style={bt} onClick={editDetails}>
                                    Save changes
                                </button>
                            </p>
                            {/* <p class="control" style={bt}>
                    <button class="button">
                        Cancel
                    </button>
                </p> */}

                        </div></section>
                        </div>
                        


                    </article>

                    <br></br>
                    <article class="message"> <br></br>
                        <p class="title is-6 ml-4">Change Password</p>
                        <div class="message-body">
                            Old Password:<div class="control"><input class="input is-hovered" id="oldpass" name="oldpass" type="password" style={txt} onChange={e => onPasswordChange(e)}></input></div>
                            <br></br>
                            New Password:<div class="control"><input class="input is-hovered" id="newpass" name="newpass" type="password" style={txt} onChange={e => onPasswordChange(e)} ></input></div>
                            <br></br>
                            Confirm Password:<div class="control"><input class="input is-hovered" id="conf" name="conf" type="password" style={txt} onChange={e => onPasswordChange(e)}></input></div>
                            <br></br>
                            <section> <div class="field is-grouped">
                            <p class="control">
                                <button style={bt} onClick={editPassword}>
                                    Save changes
                                </button>
                            </p>
                            {/* <p class="control" style={bt}>
                    <button class="button">
                        Cancel
                    </button>
                </p> */}

                        </div></section>

                        </div>
                       

                    </article>



                </div>

            </div>

        </div>


    );

}
export default AccountManagement;