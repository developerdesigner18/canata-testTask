import React from "react";
import { useParams } from "react-router-dom";
import RecentlyPlayedPost from "./Components/RecentlyPlayedPost";
import './index.css';

const toggle = {
    margin: "auto"
}


function RecentlyPlayed() {
    let { subpath } = useParams();

    return (
        <div>
            <div className="tile recent-artists">
                
                <div className=" artist2"> </div>
                <div className=" artist3"> </div>
                <div className=" artist4"> </div>
                <div className=" artist5"> </div>
                <div className=" artist6"> </div>
                <div className=" artist7"> </div>
                <div className=" artist8"> </div>
                <div className=" artist9"> </div>
            </div>
            <div className="table-container recentlyPlayedSection">
                <table className="table recent-posts">


                    <tr>
                        <div>
                            <RecentlyPlayedPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <RecentlyPlayedPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <RecentlyPlayedPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <RecentlyPlayedPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <RecentlyPlayedPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <RecentlyPlayedPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <RecentlyPlayedPost />
                        </div>
                    </tr>

                </table>
            </div>
            


            </div>
        

    )
}

export default RecentlyPlayed;