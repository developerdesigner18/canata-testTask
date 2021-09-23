import { useParams, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideNav from "../SideNav";
import * as Header from "../Header";
import Notification from "../Notification";
import * as Content from "../Content";
import * as Bio from "../Bio";
import TopNav from "../TopNav";
import EditProfile from "../EditProfile";
import user from '../../../../Assets/Admin/random.jpg';
import React, { useState, useEffect } from 'react';
//import { Modal, Button } from 'antd';
import Modal from '@material-ui/core/Modal';
import axios from "axios";
import Swal from "sweetalert2";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [userID, setID] = useState("");
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [bio,setBio] = useState("");
  const [followers,setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [status, setStatus] = useState("");
  const [image,setImage] = useState("");
  const [showImage, setShowImage] = useState("");
  const [dbImage, setDBImage] = useState("");
  const history = useHistory();

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const editprofile = ()=>{
  if(fname && lname && bio && followers) {
    let formData = new FormData();
    formData.append('Fname',fname);
    formData.append('Lname',lname);
    formData.append('Bio',bio);
    formData.append('Username',followers);
    formData.append('following', following);
    formData.append('profilePic', image);
    const userId = parseInt(sessionStorage.getItem("UserID"));
    formData.append('userId',userId)
      axios.post('http://localhost:5000/api/v1/user/editprofile',formData).then(()=>{
             console.log("success");
            //  alert("Profile changed successfully ");
            history.push("/UserProfile");
           });
  }
  else {
    Swal.fire({
      icon: "error",
      title: "Required!",
      text: "Easch fields are required",
    });
  }

}

  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <h2 id="simple-modal-title">Text in a modal</h2>
  //     <p id="simple-modal-description">
  //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //     </p>
  //     <SignUp />
  //   </div>
  // );
  let { subpath } = useParams();

  const imageChange = (event) => {
    let reader = new FileReader();
    reader.onload = e => {
      setImage(event.target.files[0]);
      setShowImage(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  useEffect(() => {
    const id = sessionStorage.getItem("UserID");
    axios.get(`http://localhost:5000/api/v1/user/getProfile?id=${id}`).then((result) => {
      if(result.data.length) {
        setFname(result.data[0].Fname);
        setLname(result.data[0].Lname);
        setBio(result.data[0].Bio);
        setFollowers(result.data[0].Username);
        setDBImage(result.data[0].Image);
      }
    })
  },[])

  return (
    <div>
      <div class="columns">
        <div class="column is-2">
          <SideNav />
        </div>
        <div class={"column is-4"}>
          <div class="column" align="center">
            <img id="user" src={showImage ? showImage : dbImage ? dbImage : user} width="400" height="400" style={{ borderRadius: 1000 / 2, marginTop: "10%", borderColor: 'black', borderWidth: 5 }} />
            <div className={classes.root}>
              <input 
                accept="image/*"
                className={classes.input}
                id="upload-proj-picture"
                multiple
                type="file"
                hidden
                onChange={e => imageChange(e)}
              />
              <label htmlFor="upload-proj-picture">
                <Button variant="contained" color="primary" component="span">
                  Upload Profile Image
                </Button>
              </label>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <TopNav />
          {subpath === "content" && <Content />}
          {subpath === "bio" && <Bio />}
          {subpath === "EditProfile" && <EditProfile />}
          {/* {subpath === "followers" && <Followers />} */}
          {/*  {subpath === "following" && <Following />} */}
          {subpath === "header" && <Header />}
          {subpath === "Notification" && <Notification />}

          <div class="columns is-gapless is-multiline is-mobile">

            <Container component="main" maxWidth="1920px">
              <CssBaseline />



              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Profile
                </Typography>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}> First Name :
                      <TextField
                        autoComplete="fname"
                        name="text"
                        variant="outlined"
                        fullWidth
                        id="text"
                        label={fname ? "" :"Person"}
                        onChange={(event)=>(setFname(event.target.value))}
                        autoFocus
                        value={fname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}> Last Name :
                      <TextField
                        autoComplete="lname"
                        name="text"
                        variant="outlined"
                        fullWidth
                        id="text"
                        label={lname ? "" : "1"}
                        onChange={(event)=>(setLname(event.target.value))}
                        autoFocus
                        value={lname}
                      />
                    </Grid>
                    <Grid item xs={12}> Bio :
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="text"
                        label={bio ? "" :"21 years old"}
                        onChange={(event)=>(setBio(event.target.value))}
                        name="text"
                        value={bio}
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12}> User Name :
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="text"
                        label={followers ? "" : "@person1"}
                        name="text"
                        onChange={(event)=>(setFollowers(event.target.value))}
                        autoComplete="text"
                        required={true}
                        value={followers}
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}> Following :
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="text"
                        label="21 Following"
                        type="text"
                        id="text"
                        onChange={(event)=>(setFollowing(event.target.value))}
                        autoComplete="current-password"
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                //label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
                    </Grid>
                  </Grid>
                  {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit
          </Button>

          <Button
            type="submit"
            width="20px"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button> */}

                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={editprofile}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>



                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      {/* <Link href="../../index.js" variant="body2">
                        Go Back
                      </Link> */}
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </div>
        </div>

      </div>
    </div>

  );
}