import React from "react";
import CountBox from "./Components/CountBox";
import ReportBox from "./Components/ReportBox";
import "./index.css";

function ReportedPosts1() {

    return (
        <div>
            <nav class="level">
                <div class="level-item ">
                    <div>
                        <CountBox />
                    </div>
                </div>

            </nav>

            <div class="dropdown is-right is-hoverable mt-6">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>Sort By</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <a href="#" class="dropdown-item">
                               Date
                            </a>
                            <a href="#" class="dropdown-item">
                                Report Count
                            </a>
                            <a href="#" class="dropdown-item">
                                Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="level-left ml-6">
                <div class="level-item ml-6">
                    <div>
                        <ReportBox />


                    </div>
                </div>



            </nav>
        </div>
    )
}

export default ReportedPosts1;