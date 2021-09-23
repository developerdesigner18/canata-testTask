const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

let storage = multer.diskStorage({
	destination: async function (req, file, cb) {
	  const uploadDir = path.join(__dirname, "..","public", "images");
	  if (fs.existsSync(uploadDir)) {
		cb(null, uploadDir);
	  } else {
		fs.mkdirSync(uploadDir,  { recursive: true });
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

router.get("/active", userController.getActiveUsers);
router.get("/deactive", userController.getDeactiveUsers);
router.post("/checkuser", userController.checkUser);
router.get("/usercount", userController.getUserCount);
router.get("/searchUser/:email", userController.getUserByEmail);
router.get("/activateUser/:email", userController.activateUser);
router.get("/deactivateUser/:email", userController.deactivateUser);

//Bhagya >>>>

router.get("/getlyrics", userController.getLyrics);
router.post("/checkuser", userController.checkUser);
router.post("/registeruser", userController.registerUser);
router.post("/inputlyrics", userController.inputLyrics);
router.post('/editProfile', upload.single("profilePic"),userController.editProfile);
router.get("/getProfile", userController.getProfile)

module.exports = router;
