import React from "react";
// import ReportBox from "Components/ReportBox";
import "./index.css";

function ContentPost() {

    return (
        <div className="bigbox1">
            <div className="bigbox2" >

                <div className="box">
                    Description
                    <textarea className="textarea" placeholder="What is the song about"></textarea>

                    Lyrics
                    <textarea className="textarea" placeholder=""></textarea>

                    Interpretation (Optional)
                    <textarea className="textarea" placeholder="What does these lyrics mean?"></textarea>

                    Tags
                    <textarea className="textarea" placeholder="Add up to 5 tags to help search this song"></textarea>
                </div>
                
                <div className="box">
                    Background
                    <div className="box">
                        Upload Content 
                    </div>
                    <div className="control">
                        <div className="select is-rounded">
                            <select>
                            <option>Select Language</option>
                            <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="box">
                    
                <div className="columns">
                <div className="column is-2">
                <button className="button is-dark">Save</button>
                <button className="button is-light">Discard</button>
                </div>
                
                
                
        </div>
                    </div>



        </div>
    </div> 
    )
    }
export default ContentPost;