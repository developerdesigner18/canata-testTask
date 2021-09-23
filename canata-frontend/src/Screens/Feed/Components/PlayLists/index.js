import React from "react";
import { useParams } from "react-router-dom";
import PlaylistPost from "./Components/PlaylistPost";
import './index.css';

const toggle = {
    margin: "auto"
}


function PlayLists() {
    let { subpath } = useParams();

    return (
        <div>
            <div className="table-container playListsSection">
                <table className="table Playlistposts">


                    <tr>
                        <div>
                            <PlaylistPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <PlaylistPost />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <PlaylistPost />
                        </div>
                    </tr>

                </table>
            </div>
            


            </div>
        

    )
}

export default PlayLists;