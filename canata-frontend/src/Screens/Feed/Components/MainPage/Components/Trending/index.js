import React from "react";
import Post from "./Components/Post";
import './index.css';


function Trending() {


    return (

        <div className="table-container trendingSection">
            <table className="table posts">


                <tr>
                    <div>
                        <Post />
                    </div>
                </tr>


            </table>
        </div>

    )
}

export default Trending;