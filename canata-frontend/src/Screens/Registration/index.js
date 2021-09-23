import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Registration() {
	const [new_email, setEmail] = useState("");
	const [new_password, setPassword] = useState("");
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const history = useHistory();

	const Registration = () => {
		axios
			.post(`http://localhost:5000/api/v1/user/registeruser`, {
				new_email: new_email,
				new_password: new_password,
				fname: fname,
				lname: lname,
			})
			.then(() => {
				// Have to use an if condition to notify if there was a query error
				Swal.fire({
					icon: "success",
					title: "Successfully Registered",
					text: "Now login with your email and password",
				}).then(() => {
					history.push("/login");
				});
			});
	};

	// .then((data) => {
	// 	console.log(data.data);
	// 	if ((data.message = "success")) {
	// 		//changed this, previously this was (data.data.user.length>0)
	// 		console.log("success");
	// 		history.push("/Feed/MainPage");
	// 	} else {
	// 		console.log("fail");
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops...",
	// 			text: "Email or Password is incorrect!",
	// 		});
	// 	}
	// });

	return (
		<div className="Home">
			<form className="login-form" onSubmit={(e) => e.preventDefault()}>
				<br></br>
				<h3>Sign Up</h3>
				<input
					type="text"
					placeholder="Email"
					name="new_email"
					className="Form-Input"
					required
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<br></br>

				<input
					type="text"
					placeholder="First Name"
					name="fname"
					className="Form-Input"
					required
					onChange={(e) => setFname(e.target.value)}
				></input>
				<br></br>

				<input
					type="text"
					placeholder="Last Name"
					name="lname"
					className="Form-Input"
					required
					onChange={(e) => setLname(e.target.value)}
				></input>
				<br></br>

				<input
					type="password"
					placeholder="Enter Password"
					name="new_password"
					className="Form-Input"
					required
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<br></br>

				<input
					type="password"
					placeholder="Re-Enter Password"
					name="password"
					className="Form-Input"
					required
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<br></br>

				<button
					type="submit"
					name="submitLogin"
					id="submit"
					className="form-button"
					onClick={Registration}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}

export default Registration;
