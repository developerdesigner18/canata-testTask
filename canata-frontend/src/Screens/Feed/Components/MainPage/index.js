import React, { useState } from "react";
import Trending from "./Components/Trending";
import Following from "./Components/Following";
import { useParams } from "react-router-dom";
import "./index.css";

const toggle = {
	margin: "auto",
};

function MainPage() {
	let { subpath } = useParams();
	const [block, setBlock] = useState("");
	//setBlock: setter, block: variable, &empty string

	const switchBlock = (e) => {
		setBlock(e.target.value);
	};

	let First_Name = sessionStorage.getItem("First_Name");

	return (
		<div className="fullbody">
			<div className="columns p-2">
				<div className="column is-12">
					<h1> Hello {First_Name}! Welcome Back! </h1>

					<div className="columns is-mobile tf-button-section">
						<div className="column tf-buttons">
							<button
								className="button trendingbtn is-medium is-fullwidth"
								style={toggle}
								onClick={switchBlock}
								value="trending"
							>
								Trending
							</button>
						</div>
						<div className="column tf-buttons">
							<button
								className="button followingbtn is-medium is-fullwidth"
								style={toggle}
								onClick={switchBlock}
								value="following"
							>
								Following
							</button>
						</div>
					</div>

					{block === "following" ? <Following /> : <Trending />}
				</div>
			</div>
		</div>
	);
}

export default MainPage;
