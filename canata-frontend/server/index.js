const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;



const app = express();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//var req = require("./node_modules/req/node_modules/request");

app.use(express.json());

const db = mysql.createConnection({
	user: "admin",
	host: "mysql-50185-0.cloudclusters.net",
	password: "Transformers3",
	database: "Cantata",
	port: "18589"
});

app.post('/sign-up', (req, res)=> {

	const fullname = req.body.fullname
	const address = req.body.address
	const nic = req.body.nic
	const telephone = req.body.telephone
	const email = req.body.email
	const password = req.body.password
 
	bcrypt.hash(password,saltRounds, (err,hash) => {

		if(err){
			console.log(err);
		}
	db.query
	("INSERT INTO signup (fullname, address, nic, telephone, email, password) VALUES (?,?,?,?,?,?)", 
	[fullname, address, nic, telephone, email, hash], 
	(err, result)=> {
		console.log(err);
	})	
	})
	
});

app.post('/login', (req, res) => {

	const email = req.body.email
	const password = req.body.password

	db.query
	("SELECT * signup WHERE email = ?;", 
	email, 
	(err, result)=> {

		if(err){
			res.send({err: err})
		}
			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (error, response)=>{
					if(response){
						res.send(result)
					}else{
						res.send({message:"Wrong username/password combination!"})
					}
				})
			}else{
				res.send({message:"User doesn't exist"});
			}
		}
	);
});

let storage = multer.diskStorage({
	destination: async function (req, file, cb) {
	  const uploadDir = path.join(__dirname, "..", "public", "images");
	  if (fs.existsSync(uploadDir)) {
		cb(null, uploadDir);
	  } else {
		fs.mkdirSync(uploadDir);
		cb(null, uploadDir);
	  }
	},
	filename: function (req, file, cb) {
	  cb(null, file.originalname);
	},
  });
  
  const upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
	  const fileType = /jpeg|jpg|png/;
	  const extension = file.originalname.substring(
		file.originalname.lastIndexOf(".") + 1
	  );
	  const mimetype = fileType.test(file.mimetype);
  
	  if (mimetype && extension) {
		return cb(null, true);
	  } else {
		cb("Error:you can upload only Image file");
	  }
	},
  });

app.post('/editProfile',upload.single("profilePic"), (req,res)=>{
	console.log("req.body and req.file ", req.body, req.file);
	const userID = req.body.userID == 'null' || req.body.userID == null ? 1 : req.body.userID;
	const Email = req.body.Email;
	let Fname = req.body.Fname;
	let Lname = req.body.Lname;
	const Password = req.body.Password;
	let Bio = req.body.Bio;
	let Username = req.body.Username;

	let imagePath = "http://localhost:3001/images/" + req.file.filename;

	// db.query("INSERT INTO User (Fname,Lname,Bio,Username,Image) VALUES (?,?,?,?,?)",[Fname,Lname,Bio,Username,imagePath],(err,result)=>{
	// 	if(err){
	// 		console.log(err);
	// 	}else{
	// 		console.log("edit profile stored...");
	// 		res.send("User Added");
	// 	}
	// });
	db.query("SELECT * FROM User WHERE UserId=?",[userID],(err,user)=>{
		if(err){
			console.log(err);
		}else{
			Fname = req.body.Fname !== '' ? req.body.Fname : user[0].Fname;
			Lname = req.body.Lname !== '' ? req.body.Lname : user[0].Lname;
			Bio = req.body.Bio !== '' ? req.body.Bio : user[0].Bio;
			Username = req.body.Username !== '' ? req.body.Username : user[0].Username;
			db.query(`UPDATE User SET Fname=?, Lname=?, Bio=?, Username=?, Image=? where UserId=?`,[Fname, Lname, Bio, Username, imagePath, userID],(err,result)=>{
				if(err){
					console.log(err);
				}else{
					console.log("edit profile stored...", result, imagePath);
					db.query("SELECT * FROM User WHERE UserId=?",[userID],(err,user)=>{
						console.log("user.. ", user[0]);
					})
					res.send("User Info Updated");
				}
			});
		}
	})
	
});

app.get('/Profile',(req,res)=>{
	db.query("SELECT * FROM User ORDER by userID ASC",(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.put('/update-user/:id',(req,res)=>{
	const ActiveStatus = req.body.ActiveStatus;
	const userID = req.body.userID;

	console.log(userID);

	const sqlUpdate = "UPDATE user SET ActiveStatus='Active' WHERE userID=?;";

	db.query(sqlUpdate,[ActiveStatus,userID],(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	})
});

app.get('/getProfile',(req,res)=>{
	db.query("SELECT * FROM User WHERE userID=?",[req.query.id],(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.listen(3001, () => {
	console.log("running on port 4000");
});