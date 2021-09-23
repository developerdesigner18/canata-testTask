const User = require("../model/user.model");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var dbConn = require("../../config/db.config");
// // get user by id and password
// exports.checkUser = (req, res)=>{
//         UserModel.checkUser(req.params.user_id, (err, employee)=>{
//         if(err)
//         res.send(err);
//         console.log('user exist',user);
//         res.send(user);
//     })
// }

exports.checkUser = (req, res) => {
	//console.log('get emp by id');
	console.log(req.body);
	UserModel.validate(req.body, (err, user) => {
		// if (err) res.send(err);
		// console.log("single user data", user);
		if (err) {
			res.status(404).send({ message: "failed", data: null });
			return;
		} else {
			if (user) {
				res.status(200).send({ message: "success", data: user[0] });
			} else {
				res.status(404).send({ message: "failed", data: null });
			}
		}
	});
};

exports.getActiveUsers = (req, res) => {
	//console.log('here all employees list');
	UserModel.getActiveUsers((err, users) => {
		// console.log("We are here");
		if (err) res.send(err);
		res.send(users); //did some changes here
	});
};

exports.getDeactiveUsers = (req, res) => {
	//console.log('here all employees list');
	UserModel.getDeactiveUsers((err, users) => {
		// console.log("We are here");
		if (err) res.send(err);
		res.send(users); //did some changes here
	});
};

exports.getUserByEmail = (req, res) => {
	//console.log('get emp by id');
	UserModel.getUserByEmail(req.params.email, (err, user) => {
		if (err) res.send(err);
		console.log(user);
		res.send(user);
	});
};

exports.getUserCount = (req, res) => {
	//console.log('here all employees list');
	UserModel.getUserCount((err, usercnt) => {
		// console.log("We are here");
		if (err) res.send(err);
		console.log("counts", usercnt);
		res.send(usercnt); //did some changes here
	});
};

exports.activateUser = (req, res) => {
	//console.log('get emp by id');
	UserModel.activateUser(req.params.email, (err, user) => {
		if (err) res.send(err);
	});
};

exports.deactivateUser = (req, res) => {
	//console.log('get emp by id');
	UserModel.deactivateUser(req.params.email, (err, user) => {
		if (err) res.send(err);
	});
};

// Bhagya >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Matches input email and password at login and validates user
exports.checkUser = (req, res) => {
	UserModel.validate(req.body, (err, user) => {
		if (err) {
			res.status(200).send({ message: "failed", data: null });
			console.log("oops");
		} else {
			// console.log(req.body.password);
			// console.log(user[0].Password);
			if (user.length > 0) {
				
				bcrypt.compare(req.body.password, user[0].Password, (error, response) => {
					console.log("req.body.. ", error, response);
						if (response) {
							res.status(200).send({ message: "success", data: user[0] });
						} else {
							if(req.body.password === user[0].Password) {
								res.status(200).send({ message: "success", data: user[0] });
							}
							else {
								res.send({ message: "wrong", data: null });
							}
						}
					}
				);
			} else {
				console.log("User doesn't exist");
				res.send({ message: "User doesn't exist", data: null });
			}
		}
	});
};

//Register new user details
exports.registerUser = (req, res) => {
	UserModel.register(req.body, (err, user) => {
		if (err) res.send(err);
		res.status(200).send({ message: "New user registered successfully" });
	});
};

//Insert new lyrics
exports.inputLyrics = (req, res) => {
	UserModel.inputLyrics(req.body, (err, user) => {
		if (err) res.send(err);
		res.status(200).send({ message: "New lyrics added successfully" });
	});
};

//Get all lyric posts
exports.getLyrics = (req, res) => {
	UserModel.getLyrics((err, lyrics) => {
		if (err) res.send(err);
		console.log(lyrics);
		res.status(200).send({ lyrics });
	});
};

exports.editProfile = (req,res) => {
	console.log("edit profile req.body ",req.body, req.file, parseInt(req.body.userId));
	dbConn.query("SELECT * FROM user WHERE UserId=?",[parseInt(req.body.userId)],(err,user)=>{
		if(err){
			console.log(err);
		}else{
			Fname = req.body.Fname !== '' ? req.body.Fname : user[0].Fname;
			Lname = req.body.Lname !== '' ? req.body.Lname : user[0].Lname;
			Bio = req.body.Bio !== '' ? req.body.Bio : user[0].Bio;
			Username = req.body.Username !== '' ? req.body.Username : user[0].Username;
			const imagePath = req.file ? "http://localhost:5000/images/" + req.file.filename : user[0].Image;
			dbConn.query(`UPDATE User SET Fname='${Fname}', Lname='${Lname}', Bio='${Bio}', Username='${Username}', Image='${imagePath}' where UserId=${parseInt(req.body.userId)}`,(err,result)=>{
				if(err){
					console.log(err);
				}else{
					console.log("edit profile stored...", result, imagePath);
					dbConn.query("SELECT * FROM User WHERE UserId=?",[parseInt(req.body.userId)],(err,user,fields)=>{
						console.log("user.. ", user[0]);
					})
					res.send("User Info Updated");
				}
			});
		}
	})
}

exports.getProfile = (req,res) => {
	dbConn.query("SELECT * FROM User WHERE userID=?",[parseInt(req.query.id)],(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
}