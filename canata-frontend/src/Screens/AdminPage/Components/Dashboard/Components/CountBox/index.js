import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function CountBox() {
    const bx = {
        backgroundColor: "rgb(204, 197, 197)",
        height: "90%",
        width: "80%"
    }

    const [record, setRecord] = useState([]);

    const loadCounts = async () => {
        var response = fetch('http://localhost:5000/api/v1/admin/gettot')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadCounts();
    }, []);
    


    return (
        <div>
            <table>
                {record.map((counts) =>
                    <nav class="level mt-6">
                        <div className="level-item has-text-centered" >
                            <div>
                                <div className="box mx-6" style={bx}>
                                    <div class="content">
                                        <p>
                                            <h1>Visitors</h1>
                                            7820
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <div class="box mx-6" style={bx}>
                                    <div class="content">
                                        <p>
                                            <h1>Users</h1>

                                            {counts.usercnt}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <div class="box mx-6" style={bx}>
                                    <div class="content">
                                        <p>
                                            <h1>Posts</h1>

                                            {counts.posts}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </nav>
                )}
            </table>
        </div>




    )
}

export default CountBox;