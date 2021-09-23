import React from "react";
import CountBox from "./Components/CountBox";
import TrafficBar from "./Components/TrafficBar";

function Dashboard() {


    return (

        <div>
            <nav class="level">
                <div class="level-item ">
                    <div>
                        <CountBox />
                    </div>
                </div>

            </nav>

            <nav class="level">
                <div class="level-item  is-centered">
                    <div>
                       <TrafficBar />
                    </div>
                </div>



            </nav>
        </div>
    )
}

export default Dashboard;