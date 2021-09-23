import React from "react";
import './index.css';
import Post from "./Components/Post";

function Following() {


    return (
        <div class="table-container followingSection">
            <table class="table posts">


                <tr>
                    <div>
                        <Post />
                    </div>
                </tr>
                <tr>
                    <div>
                        <Post />
                    </div>
                </tr>
                <tr>
                    <div>
                        <Post />
                    </div>
                </tr>

            </table>
        </div>
    )
}

export default Following;