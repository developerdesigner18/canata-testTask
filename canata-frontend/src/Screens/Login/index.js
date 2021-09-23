import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	// const [user, setUser] = useState([]); not using this due to error; instead assigning response array directly to user var
	const history = useHistory();

	const Login = () => {
		if (email == "admin@cantata.com" && password == "admin") {
			history.push("/admin/dashboard");
		} else {
			axios
				.post(`http://localhost:5000/api/v1/user/checkuser`, {
					email: email,
					password: password,
				})
				.then((response) => {
					console.log(response.data.data);
					let user = response.data.data; //
					// setUser(response.data.data); //have to click login twice to work >> need to check this error >> changed line 22
					// console.log(user.Lname);
					// console.log(user.Fname);
					if (response.data.message == "success") {
						//changed this, previously this was (data.data.user.length>0)
						console.log("success");
						sessionStorage.setItem("loggedIn", "true");
						sessionStorage.setItem("UserID", user.UserId);
						sessionStorage.setItem("Email", user.Email);
						sessionStorage.setItem("First_Name", user.Fname);
						sessionStorage.setItem("Last_Name", user.Lname);
						console.log(sessionStorage);
						// history.push("/Feed/MainPage");
						history.push("/editprofile")
					} else if (response.data.message == "wrong") {
						console.log("Wrong email and password combination");
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Email or Password is incorrect!",
						});
					} else {
						console.log("User doesn't exist");
						Swal.fire({
							icon: "error",
							title: "This user doesn't exist",
							text: "Please check your email or register",
						});
					}
				});
		}
	};
	//else {
	// 	axios
	// 		.post(`http://localhost:5000/api/v1/admin/checkadmin`, {
	// 			email: email,
	// 			password: password,
	// 		})
	// 		.then((response1) => {
	// 			console.log(response1.data.data);
	// 			let admin = response1.data.data; //
	// 			// setUser(response.data.data); //have to click login twice to work >> need to check this error >> changed line 22
	// 			// console.log(user);
	// 			if (response1.data.message == "success") {
	// 				//changed this, previously this was (data.data.user.length>0)
	// 				console.log("success");
	// 				// sessionStorage.setItem("loggedIn", "true");
	// 				sessionStorage.setItem("AdminId", admin.AdminId);
	// 				// sessionStorage.setItem("Email", user.Email);
	// 				// sessionStorage.setItem("First_Name", user.Fname);
	// 				// sessionStorage.setItem("Last_Name", user.LName);
	// 				history.push("/admin/dashboard");
	// 			} else {
	// 				console.log("Wrong email and password combination");
	// 				Swal.fire({
	// 					icon: "error",
	// 					title: "Oops...",
	// 					text: "Email or Password is incorrect!",
	// 				});
	// 			}
	// 		});
	// 	// console.log("Wrong email and password combination");
	// 	// Swal.fire({
	// 	// 	icon: "error",
	// 	// 	title: "Oops...",
	// 	// 	text: "Email or Password is incorrect!",
	// 	// });
	// }
	// 		});
	// };
	// let User_ID = sessionStorage.getItem('UserID');
	const Register = () => {
		history.push("/registration");
	};

	const loginWithFacebook = () => {
		history.push("/Feed/MainPage");
	};

	const loginWithGoogle = () => {
		history.push("/Feed/MainPage");
	};

	return (
		<div className="Home">
			<form className="login-form" onSubmit={(e) => e.preventDefault()}>
				<h4>Login to Cantata</h4>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="Form-Input"
					required
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<br></br>

				<input
					type="password"
					placeholder="Enter Password"
					name="password"
					className="Form-Input"
					required
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<br></br>
				<div className="remember-me">
					<span>Remember me</span>
					<input
						type="checkbox"
						name="remember_me"
						className="remember-me-check"
					></input>
				</div>
				<br></br>

				<button
					type="submit"
					name="submitLogin"
					id="submit"
					className="form-button"
					onClick={Login}
					// onSubmit={Login}
				>
					Sign In
				</button>
				<p>or sign in with</p>
				<div className="login-option-container">
					<button
						className="login-option-btn facebook"
						onClick={loginWithFacebook}
					>
						Facebook
					</button>
					<button className="login-option-btn google" onClick={loginWithGoogle}>
						Google
					</button>
				</div>

				<p className="no-account" onClick={Register}>
					Don't have an account? Register here!
				</p>
			</form>
		</div>
	);
}

export default Login;
