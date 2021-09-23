
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";




function Notification() {

    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [receiv, setReceiv] = useState("");


    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const changemail = () => {
        if (email === '') {
            const em = inputValue;
            setEmail(em);
            resetInputField();
        }
        else {
            const em = email + "," + inputValue;
            setEmail(em);
            resetInputField();
        }
    };

    const resetInputField = () => {
        setInputValue("");
    };


    const resetReceiv = () => {
        setReceiv("");
    };
    const receiver = (e) => {
        // resetReceiv();
        setReceiv(e.target.value);
        // alert(receiv);

        // if (document.getElementById("sel").value === "all") {
        //     document.getElementById("emai").disabled = 'true';
        // }
        if (receiv === "all") {
            // alert(receiv+"1");
            document.getElementById("emai").disabled = 1;
        }

        else {
            // alert(receiv+"2");

            document.getElementById("emai").disabled = 0;
        }

        // resetReceiv();

    };




    const txt = {
        width: "70%"
    }

    const btn = {
        width: "10%",
        height: "5.3vh",
        borderRadius: "3px"
    }

    const txta = {
        border: "none",
        overflow: "auto",
        outline: "none",
        resize: "none"

    }

    const foot = {

        borderStyle: "solid",
        borderWidth: "thin",
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
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");



    // const [notification, setNotification] = useState({
    //     title: "",
    //     message: "",
    //     sendto: ""
    // });

    // const { title, message, sendto } = notification;
    // const onInputChange = e => {
    //     setNotification({ ...notification, [e.target.name]: e.target.value });
    // };


    const submitNotification = async (e) => {
        // console.log(email);
        e.preventDefault();
        // e.target.reset();
        await axios.post("http://localhost:5000/api/v1/admin/addnotification", {
            title: title,
            message: message

        })
            .then((data) => {
                // console.log(data.data.data);
                if (data.data.data != null) {
                    const notid = data.data.data;
                    axios.post("http://localhost:5000/api/v1/admin/addusernotification", {
                        notification_id: notid,
                        email: email

                    })
                        .then((data) => {
                            console.log(data.data.data);
                            if (data.data.data != null) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Sent",
                                    text: "Notification Sent Succesfully!",
                                });

                            } else {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Notification Sending Failed!",
                                });
                            }
                        });



                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Notification Sending Failed!",
                    });
                }
            });


    };


    




    return (
        <div>
            <div class="card is-centered mt-6 ml-6">
                <header class="card-header">
                    <p class="card-header-title">
                        Send Notification
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    Title:<div class="control"></div><input class="input is-hovered" id="title" name="title" type="text" style={txt} onChange={(e) => setTitle(e.target.value)} /><br></br><br></br>
                    Message:<textarea class="textarea" name="message" onChange={(e) => setMessage(e.target.value)}></textarea> <br></br>
                    Send to:<br></br><div class="select is-info" >
                        <select id="sel" onChange={receiver}>
                            <option value="specify">All Users</option>
                            <option value="all">Selected Users</option>
                        </select>
                    </div>
                    <br></br><br></br><br></br>
                    User Email:<div class="control"></div><input class="input is-hovered" id="emai" name="emai" type="text" value={inputValue} disabled={true} style={txt} onChange={handleUserInput} />

                    <button style={btn} onClick={changemail}>Add</button>
                    <br></br>
                    <div class="control"></div><textarea class="textarea has-fixed-size" type="text" id="sendto" name="sendto" value={email} style={txta} onChange={e => { this.handleEmail(); this.onInputChange(e); }} />

                    {/* <input class="input is-hovered" id="adminId" name="adminId" type="text" style={txt} onChange={e => onInputChange(e)} /> */}

                    <br></br>
                    <footer class="card-footer">
                        <div className="refer"><a href="" className="card-footer-item" style={foot} onClick={submitNotification} >Send</a></div>
                    </footer>
                </div>

            </div>
        </div>
    );
}
export default Notification;
