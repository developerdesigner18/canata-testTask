import React, { useState, useEffect } from "react";
import user from "../../../../../../../../Assets/Admin/user.png";
import close from "../../../../../../../../Assets/Admin/close.png";
import './trendingPostindex.css';
import Modal from 'react-modal';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";


//pixel

const seeBtn = {
    width: "20vh",
    height: "5vh"
}
//rem 

function Post() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }

    const [record, setRecord] = useState([]);
    const loadLyrics = async () => {
        var response = fetch('http://localhost:5000/api/v1/content/getlyrics')
            .then(function (response) { return response.json(); })
            .then(function (myJson) { setRecord(myJson); })
    }

    useEffect(() => {
        loadLyrics();
    }, []);


    return (

        <div className="fullPost">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <table>
                    {record.map((lyrics) =>
                        <article className="tile is-child is-primary">
                            <button className="closeBtn" onClick={closeModal}>Close</button>
                            <div >
                                <div className="tile is-ancestor">
                                    <div className="tile  is-vertical is-8">
                                        <div className="tile ">
                                            <div className="tile lyricBox is-parent is-vertical">
                                                <article className="tile is-child is-primary">
                                                    <div className="columns writer"><img src={user} />
                                                        <div className="columns writerName-popup"> {lyrics.UserId} </div>
                                                    </div>
                                                    <p className="writer">20th July 2021</p>
                                                    <p className="title ">No scars to your beautiful</p>

                                                    <span className="subtitle halfLyricSection">
                                                        She just wants to be, beautiful
                                                        She goes, unnoticed she knows, no limits
                                                        She craves, attention she praises, an image
                                                        She prays to be, sculpted by the sculptor
                                                        Oh, she don't see, the light that's shining
                                                        Deeper than the eyes can find it
                                                        Maybe we have made her blind
                                                        So she tries to cover up her pain
                                                        And cut her woes away
                                                        'Cause covergirls don't cry
                                                        After their face is made
                                                        But there's a hope that's waiting for you in the dark
                                                        You should know you're beautiful just the way you are
                                                        And you don't have to change a thing
                                                        The world could change its heart
                                                        No scars to your beautiful
                                                        We're stars and we're beautiful
                                                    </span>
                                                </article>

                                            </div>
                                        </div>
                                        <div className="likeComment">
                                            <div class="columns">
                                                <div class="column">

                                                </div>
                                                <div class="column">
                                                    <FaRegThumbsUp />100  Likes
                                                </div>
                                                <div class="column">
                                                    <FaCommentAlt />  20 Comments
                                                </div>
                                                <div class="column">
                                                    <FaEllipsisV /> Options
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tile coversthumbnails is-parent thumbnails">
                                            <div className="previous"><FaLessThan /></div>
                                            <div>
                                                <button className="coverBtn1">Cover 1
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



                                            </div>
                                            <div>
                                                <button className="coverBtn2">Cover 2
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


                                            </div>
                                            <div>
                                                <button className="coverBtn3">Cover 3
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
                                            </div>
                                            <div>
                                                <div className="next"><FaGreaterThan /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descriptionSection is-parent">
                                        <article className="tile is-child is-success">
                                            <div className="content">
                                                <p className="title">Description</p>
                                                <p className="subtitle">Basically,
                                                    that song is about body image.
                                                    It's directed at women, but I think men can relate to it as well.
                                                    It's just a song about these things that certain women go through on a daily basis in order to feel loved or in order to love themselves. I think that's such a thing that goes on in today's world. These weird things are instilled in us. You know? That tell us that we’re not good enough or that there's only one kind of beauty. This song basically is contradicting that idea. It's saying, 'Well, if the world doesn't like how you look then they should change.</p>
                                            </div>
                                        </article>
                                        {/* comment section */}
                                        <div className="commentsSection">

                                            <div class="comment-thread">
                                                {/* <!-- Comment 1 start --> */}
                                                <details open class="comment" id="comment-1">
                                                    <a href="#comment-1" class="comment-border-link">
                                                        <span class="sr-only">Jump to comment-1</span>
                                                    </a>
                                                    <summary>
                                                        <div class="comment-heading">
                                                            <div class="comment-voting">
                                                                <button type="button">
                                                                    <span aria-hidden="true">&#9650;</span>
                                                                    <span class="sr-only">Vote up</span>
                                                                </button>
                                                                <button type="button">
                                                                    <span aria-hidden="true">&#9660;</span>
                                                                    <span class="sr-only">Vote down</span>
                                                                </button>
                                                            </div>
                                                            <div class="comment-info">
                                                                <a href="#" class="comment-author">someguy14</a>
                                                                <p class="m-0">
                                                                    22 points &bull; 4 days ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </summary>

                                                    <div class="comment-body">
                                                        <p>
                                                            This is really great! I fully agree with what you wrote, and this is sure to help me out in the future. Thank you for posting this.
                                                        </p>
                                                        <button type="button">Reply</button>
                                                        <button type="button">Flag</button>
                                                    </div>

                                                    <div class="replies">
                                                        {/* <!-- Comment 2 start --> */}
                                                        <details open class="comment" id="comment-2">
                                                            <a href="#comment-2" class="comment-border-link">
                                                                <span class="sr-only">Jump to comment-2</span>
                                                            </a>
                                                            <summary>
                                                                <div class="comment-heading">
                                                                    <div class="comment-voting">
                                                                        <button type="button">
                                                                            <span aria-hidden="true">&#9650;</span>
                                                                            <span class="sr-only">Vote up</span>
                                                                        </button>
                                                                        <button type="button">
                                                                            <span aria-hidden="true">&#9660;</span>
                                                                            <span class="sr-only">Vote down</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="comment-info">
                                                                        <a href="#" class="comment-author">randomperson81</a>
                                                                        <p class="m-0">
                                                                            4 points &bull; 3 days ago
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </summary>

                                                            <div class="comment-body">
                                                                <p>
                                                                    Took the words right out of my mouth!
                                                                </p>
                                                                <button type="button">Reply</button>
                                                                <button type="button">Flag</button>
                                                            </div>
                                                        </details>
                                                        {/* <!-- Comment 2 end -->

            <!-- Comment 3 start --> */}
                                                        <details open class="comment" id="comment-3">
                                                            <a href="#comment-3" class="comment-border-link">
                                                                <span class="sr-only">Jump to comment-3</span>
                                                            </a>
                                                            <summary>
                                                                <div class="comment-heading">
                                                                    <div class="comment-voting">
                                                                        <button type="button">
                                                                            <span aria-hidden="true">&#9650;</span>
                                                                            <span class="sr-only">Vote up</span>
                                                                        </button>
                                                                        <button type="button">
                                                                            <span aria-hidden="true">&#9660;</span>
                                                                            <span class="sr-only">Vote down</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="comment-info">
                                                                        <a href="#" class="comment-author">2edgy4u</a>
                                                                        <p class="m-0">
                                                                            -19 points &bull; 3 days ago
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </summary>

                                                            <div class="comment-body">
                                                                <p>
                                                                    Wow, are you serious? You have some pretty low standards to be able to enjoy this. Good for you I guess, but you should honestly stop making these embarrassing comments.
                                                                </p>
                                                                <button type="button">Reply</button>
                                                                <button type="button">Flag</button>
                                                            </div>

                                                            <div class="replies">
                                                                {/* <!-- Comment 4 start --> */}
                                                                <details open class="comment" id="comment-4">
                                                                    <a href="#comment-4" class="comment-border-link">
                                                                        <span class="sr-only">Jump to comment-4</span>
                                                                    </a>
                                                                    <summary>
                                                                        <div class="comment-heading">
                                                                            <div class="comment-voting">
                                                                                <button type="button">
                                                                                    <span aria-hidden="true">&#9650;</span>
                                                                                    <span class="sr-only">Vote up</span>
                                                                                </button>
                                                                                <button type="button">
                                                                                    <span aria-hidden="true">&#9660;</span>
                                                                                    <span class="sr-only">Vote down</span>
                                                                                </button>
                                                                            </div>
                                                                            <div class="comment-info">
                                                                                <a href="#" class="comment-author">modpowertrip</a>
                                                                                <p class="m-0">
                                                                                    9 points &bull; 2 days ago
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </summary>

                                                                    <div class="comment-body">
                                                                        <p>
                                                                            You are breaking <a href="#rule-687">Rule #687</a> with that comment. Please avoid posting like this in the future, or I will ban you.
                                                                        </p>
                                                                        <button type="button">Reply</button>
                                                                        <button type="button">Flag</button>
                                                                    </div>
                                                                </details>
                                                                {/* <!-- Comment 4 end -->

                    <!-- Comment 5 start --> */}
                                                                <details open class="comment" id="comment-5">
                                                                    <a href="#comment-5" class="comment-border-link">
                                                                        <span class="sr-only">Jump to comment-5</span>
                                                                    </a>
                                                                    <summary>
                                                                        <div class="comment-heading">
                                                                            <div class="comment-voting">
                                                                                <button type="button">
                                                                                    <span aria-hidden="true">&#9650;</span>
                                                                                    <span class="sr-only">Vote up</span>
                                                                                </button>
                                                                                <button type="button">
                                                                                    <span aria-hidden="true">&#9660;</span>
                                                                                    <span class="sr-only">Vote down</span>
                                                                                </button>
                                                                            </div>
                                                                            <div class="comment-info">
                                                                                <a href="#" class="comment-author">imemespam</a>
                                                                                <p class="m-0">
                                                                                    3 points &bull; 2 days ago
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </summary>

                                                                    <div class="comment-body">
                                                                        <p>
                                                                            Well, that's just like your opinion man.
                                                                        </p>
                                                                        <button type="button">Reply</button>
                                                                        <button type="button">Flag</button>
                                                                    </div>
                                                                </details>
                                                                {/* <!-- Comment 5 end -->

                    <!-- Comment 6 start --> */}
                                                                <details open class="comment" id="comment-6">
                                                                    <a href="#comment-6" class="comment-border-link">
                                                                        <span class="sr-only">Jump to comment-6</span>
                                                                    </a>
                                                                    <summary>
                                                                        <div class="comment-heading">
                                                                            <div class="comment-voting">
                                                                                <button type="button">
                                                                                    <span aria-hidden="true">&#9650;</span>
                                                                                    <span class="sr-only">Vote up</span>
                                                                                </button>
                                                                                <button type="button">
                                                                                    <span aria-hidden="true">&#9660;</span>
                                                                                    <span class="sr-only">Vote down</span>
                                                                                </button>
                                                                            </div>
                                                                            <div class="comment-info">
                                                                                <a href="#" class="comment-author">lukerbro57</a>
                                                                                <p class="m-0">
                                                                                    0 points &bull; 2 days ago
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </summary>

                                                                    <div class="comment-body">
                                                                        <p>
                                                                            Lol I agree with you.
                                                                        </p>
                                                                        <button type="button">Reply</button>
                                                                        <button type="button">Flag</button>
                                                                    </div>
                                                                </details>
                                                                {/* <!-- Comment 6 end --> */}

                                                                <a href="#load-more">Load more replies</a>
                                                            </div>
                                                        </details>
                                                        {/* <!-- Comment 3 end --> */}
                                                    </div>
                                                </details>
                                                {/* <!-- Comment 1 end --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </article>
                    )} </table>
            </Modal>
            <table> {record.map((lyrics) =>
                <div>
                    <div className="postedBy">
                        <div className="columns writer"><img src={user} />
                            <div className="columns writerName"> {lyrics.UserId}</div>
                        </div>
                    </div>

                    <div className="box postContent" >

                        <div className="tile is-ancestor">
                            <div className="tile  is-vertical is-8">
                                <div className="tile ">
                                    <div className="tile lyricBox is-parent is-vertical">
                                        <article className="tile is-child is-primary">
                                            <p className="title ">{lyrics.Title}</p>
                                            <p className="subtitle halfLyricSection">
                                                You can be the peanut butter to my jelly
                                                You can be the butterflies I feel in my belly
                                                You can be the captain
                                                And I can be your first mate
                                                You can be the chills that I feel on our first date
                                                You can be the hero
                                                And I can be your sidekick
                                                You can be the tear That I cry if we ever split
                                                You can be the rain from the cloud when it's stormin'
                                                Or u can be the sun when it shines in the mornin'
                                                Don't know if I could ever be without you
                                            </p>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <button className="seeBtn" onClick={openModal}>See full lyrics</button>
                                    <button className="seeBtn" ><FaRegThumbsUp />   Like</button>
                                    <button className="seeBtn" ><FaCommentAlt />   Comment</button>
                                </div>
                            </div>
                            <div className="tile descriptionSection is-parent lyricSection ">
                                <article className="tile is-child is-success">
                                    <div className="content">
                                        <p className="title">Description</p>
                                        <p className="subtitle">{lyrics.Description}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            )}</table>
        </div>
    )
}

export default Post;