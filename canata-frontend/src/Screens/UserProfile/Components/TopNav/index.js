import React, {useEffect, useState} from "react";
import user from "../../../../Assets/Admin/random.jpg";
import axios from "axios";


import './index.css';




function TopNav() {

    const [dbImage, setDBImage] = useState("");

    const [fname,setFname] = useState("");
useEffect(() => {
    const id = sessionStorage.getItem("UserID");
    axios.get(`http://localhost:5000/api/v1/user/getProfile?id=${id}`).then((result) => {
      if(result.data.length) {
        setDBImage(result.data[0].Image);
        setFname(result.data[0].Fname);
      }
    })
},[])

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            
            <div class="navbar-end">
                <div class="navbar-item">
                    
                        <p class="btn mr-3">
                            <strong>{fname}
                            </strong>
                        </p>
                                           
                    <div className="topuser">
                        <img src={dbImage} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav;


