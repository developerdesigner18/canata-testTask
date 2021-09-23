import React from "react";
import user from "../../../../Assets/Admin/user.png";

import "./index.css";
function TopNav() {
	let LastName = sessionStorage.getItem("Last_Name");
	let FirstName = sessionStorage.getItem("First_Name");
	return (
		<nav className="feed-navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-end">
				<div className="navbar-item">
					<p className="navbar-name">
						<strong>
							<h1>
								{FirstName} {LastName}
							</h1>
						</strong>
					</p>

					<div className="topuser">
						<img src={user} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default TopNav;
