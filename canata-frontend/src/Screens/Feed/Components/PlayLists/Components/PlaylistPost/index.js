import React from "react";
import './playlists.css';
import { FaPlay } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";


//pixel

//rem 

function PlaylistPost() {
    return (

        <div className="full-playlist">
            <div className="playlist-name">Study Time</div>
            <div className="tile is-parent playlist-box">

                <div>
                    <button className="playlist-item1">Cover 1
                        <div className="likeComment">
                            <div class="columns">
                                <div class="column">

                                </div>
                                <div class="column">
                                    <FaRegThumbsUp /> Likes
                                </div>
                                <div class="column">
                                    <FaCommentAlt />Comment
                                </div>
                                <div class="column">
                                    <FaEllipsisV /> Options
                                </div>
                            </div>
                        </div></button>

                   <div className="cover-name">Thinking Out Loud</div>
                   <div className="artist-name">Ed Sheeran</div>

                </div>
                <div>
                    <button className="playlist-item2">Cover 2
                        <div className="likeComment">
                            <div class="columns">
                                <div class="column">

                                </div>
                                <div class="column">
                                    <FaRegThumbsUp />Like
                                </div>
                                <div class="column">
                                    <FaCommentAlt />Comment
                                </div>
                                <div class="column">
                                    <FaEllipsisV />Options
                                </div>
                            </div>
                        </div></button>
                        <div className="cover-name">We Don't Talk Anymore</div>
                   <div className="artist-name">Charlie Puth</div>

                </div>
                <div>
                    <button className="playlist-item3">Cover 3
                        <div className="likeComment">
                            <div class="columns">
                                <div class="column">

                                </div>
                                <div class="column">
                                    <FaRegThumbsUp />Like
                                </div>
                                <div class="column">
                                    <FaCommentAlt />Comment
                                </div>
                                <div class="column">
                                    <FaEllipsisV /> Options
                                </div>
                            </div>
                        </div></button>
                        <div className="cover-name">Closer</div>
                   <div className="artist-name">The Chainsmokers</div>
                </div>
                <div>
                    <button className="playlist-item4">Cover 3
                        <div className="likeComment">
                            <div class="columns">
                                <div class="column">

                                </div>
                                <div class="column">
                                    <FaRegThumbsUp />Like
                                </div>
                                <div class="column">
                                    <FaCommentAlt />Comment
                                </div>
                                <div class="column">
                                    <FaEllipsisV /> Options
                                </div>
                            </div>
                        </div></button>
                        <div className="cover-name">We Found Love</div>
                   <div className="artist-name">Rihanna</div>
                </div>
            </div>
        </div>
    )

}

export default PlaylistPost;