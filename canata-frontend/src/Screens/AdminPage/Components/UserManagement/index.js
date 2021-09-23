import React from "react";
import { useParams } from "react-router-dom";
import CountBox from "./Components/CountBox";
import NavTab from "./Components/Navtab";

function UserManagement() {

    const txt = {
        width: "50%"
    }

    const btn = {
        backgroundColor: "white",
        width: "5%",
        height: "5.3vh",
        border: "none",
        borderRadius: "3px",

    }
    let { subpath } = useParams();
    return (
        <div>
                    <nav class="level">
                <div class="level-item ">
                    <div>
                        <CountBox />
                    </div>
                </div>

            </nav><br></br><br></br><br></br>

            <nav class="level">
                <div class="level-item">
                    <NavTab />                   
                </div>
            </nav>



        </div>
    )
}
export default UserManagement;

