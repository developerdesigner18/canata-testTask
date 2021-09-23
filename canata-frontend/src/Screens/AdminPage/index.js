import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import ReportedPosts1 from "./Components/ReporedPosts1";
import TopNav from "./Components/TopNav";
import ReportedPosts2 from "./Components/ReportedPosts2";
import ReportedUsers1 from "./Components/ReportedUsers1";
import ReportedUsers2 from "./Components/ReportedUsers2";
import AccountManagement from "./Components/AccountManagement";
import Notification from "./Components/Notifications";
import UserManagement from "./Components/UserManagement";
import ReportedLyrics1 from "./Components/ReportedLyrics1";
import ReportedLyrics2 from "./Components/ReportedLyrics2";


function AdminPage() {

    let { subpath } = useParams();

    return (
        <div>
            <div class="columns">
                <div class="column is-2">
                    <SideNav />
                </div>
                <div class="column is-10">
                <TopNav />
                    {subpath === "dashboard" && <Dashboard />}
                    {subpath === "reportedposts1" && <ReportedPosts1 />}
                    {subpath === "reportedposts2" && <ReportedPosts2 />}
                    {subpath === "reportedlyrics1" && <ReportedLyrics1 />}
                    {subpath === "reportedlyrics2" && <ReportedLyrics2 />}
                    {subpath === "reportedusers1" && <ReportedUsers1 />}
                    {subpath === "reportedusers2" && <ReportedUsers2 />}
                    {subpath === "accountmanagement" && <AccountManagement />}
                    {subpath === "notification" && <Notification />}
                    {subpath === "usermanagement" && <UserManagement />}
                </div>

            </div>

        </div>

    )
}

export default AdminPage;