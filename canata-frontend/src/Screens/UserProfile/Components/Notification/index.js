import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom";
import { NotificationActions, NotifcationContainer } from 'material-ui-notifications';
import SideNav from "../SideNav";
import * as Content from "../Content";
import * as Bio from "../Bio";
import TopNav from "../TopNav";
import EditProfile from "../EditProfile";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import * as Header from "../Header";
import Notification from "../Notification";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactNotification from 'react-notifications-component'

function refreshMessages() {
	const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

	return Array.from(new Array(50)).map(
		() => messageExamples[getRandomInt(messageExamples.length)],
	);
}

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Notifications() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);
	const [messages, setMessages] = React.useState(() => refreshMessages());

	React.useEffect(() => {
		ref.current.ownerDocument.body.scrollTop = 0;
		setMessages(refreshMessages());
	}, [value, setMessages]);
	const notify = () => {
		toast.success("Wow so easy!", { position: toast.POSITION.BOTTOM_CENTER, autoClose: false })
	};

	let { subpath } = useParams();

	return (
		<React.Fragment>
			<CssBaseline />

			<main>
				<div>
					<div class="columns">
						<div class="column is-2">
							<SideNav />
						</div>

						<div class="column is-10">
							<TopNav />
							{subpath === "content" && <Content />}
							{subpath === "bio" && <Bio />}
							{subpath === "EditProfile" && <EditProfile />}
							{/* {subpath === "followers" && <Followers />} */}
							{/*  {subpath === "following" && <Following />} */}
							{subpath === "header" && <Header />}
							{subpath === "Notification" && <Notification />}

							<div>
								<Box sx={{ pb: 7 }} ref={ref}>
									<CssBaseline />
									<List>
										{messages.map(({ primary, secondary, person }, index) => (
											<ListItem button key={index + person}>
												<ListItemAvatar>
													<Avatar alt="Profile Picture" src={person} />
												</ListItemAvatar>
												<ListItemText primary={primary} secondary={secondary} />
											</ListItem>
										))}
									</List>
									<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
										<BottomNavigation
											showLabels
											value={value}
											onChange={(event, newValue) => {
												setValue(newValue);
											}}
										>
											<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
											<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
											<BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
										</BottomNavigation>
									</Paper>
								</Box>
							</div>

						</div>

					</div>

				</div>
				{/* Hero unit */}


			</main>
			{/* Footer */}
			{/* End footer */}
		</React.Fragment>
	);
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  }
];