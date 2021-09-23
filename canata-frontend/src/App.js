// import { useLocation } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./Screens/AdminPage/index";
import LoginPage from "./Screens/Login/index";
import Feed from "./Screens/Feed/index";
//import { GuardProvider, GuardedRoute } from 'react-router-guards';
import "./App.css";
import Registration from "./Screens/Registration/index";
import Profile from "./Screens/UserProfile/index";
import ContentPost from "./Screens/ContentPost";
import EditProfile from "./Screens/UserProfile/Components/EditProfile";
import Notification from "./Screens/UserProfile/Components/Notification"
import ReportedLyrics2 from "./Screens/AdminPage/Components/ReportedLyrics2";
import PostLyrics from "./Screens/Feed/Components/PostLyrics";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/admin/:subpath" exact>
						<AdminPage />
					</Route>

					{/* <Route path="/admin/reportedlyrics2/:lyricid" exact >
            <ReportedLyrics2 />
          </Route> */}

					<Route path="/login" exact>
						<LoginPage />
					</Route>

					<Route path="/registration" exact>
						<Registration />
					</Route>

					<Route path="/postlyrics" exact>
						<PostLyrics />
					</Route>

					<Route path="/" exact>
						<Feed />
					</Route>

					<Route path="/UserProfile" exact>
						<Profile />
					</Route>

					<Route path="/ContentPost" exact>
						<ContentPost />
					</Route>

					<Route path="/editprofile" exact>
						<EditProfile />
					</Route>

					<Route path="/notification">
						<Notification />
					</Route>

					{/* <Route path="/ContentPost" exact >
            <ContentPost/>
          </Route> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
