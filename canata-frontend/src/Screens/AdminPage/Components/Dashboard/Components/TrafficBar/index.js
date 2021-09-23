import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import './index.css';
import React, { useState, useEffect } from "react";


function TrafficBar() {
  const AdminId=sessionStorage.getItem("AdminId");


  const [recorduser, setRecorduser] = useState([]);
  const [recordcover, setRecordcover] = useState([]);
  const [recordlyric, setRecordlyric] = useState([]);

  
useEffect(() => {
  loaduserCounts();
  loadcoverCounts();
  loadlyricCounts();
}, []);

  const loaduserCounts = async () => {
    var response = fetch('http://localhost:5000/api/v1/admin/getuserStats')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setRecorduser(myJson);

      });

  }

  const loadcoverCounts = async () => {
    var response = fetch('http://localhost:5000/api/v1/admin/getcoverStats')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setRecordcover(myJson);

      });

  }

  const loadlyricCounts = async () => {
    var response = fetch('http://localhost:5000/api/v1/admin/getlyricStats')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setRecordlyric(myJson);

      });

  }


const data = [
  { name: 'January', Covers: recordcover || recordcover[0].covercnt, Users: recorduser || recorduser[0].usercnt, Lyrics: recordlyric || recordlyric[0].lyriccnt },
  { name: 'February', Covers: recordcover || recordcover[1].covercnt, Users: recorduser || recorduser[1].usercnt, Lyrics: recordlyric || recordlyric[1].lyriccnt },
  { name: 'March', Covers: recordcover || recordcover[2].covercnt, Users: recorduser || recorduser[2].usercnt, Lyrics: recordlyric || recordlyric[2].lyriccnt },
  { name: 'April', Covers: recordcover || recordcover[3].covercnt, Users: recorduser || recorduser[3].usercnt, Lyrics: recordlyric || recordlyric[3].lyriccnt },
  { name: 'May', Covers: recordcover || recordcover[4].covercnt, Users: recorduser || recorduser[4].usercnt, Lyrics: recordlyric || recordlyric[4].lyriccnt },
  { name: 'June', Covers: recordcover || recordcover[5].covercnt, Users: recorduser || recorduser[5].usercnt, Lyrics: recordlyric || recordlyric[5].lyriccnt },
  { name: 'July', Covers: recordcover || recordcover[6].covercnt, Users: recorduser || recorduser[6].usercnt, Lyrics: recordlyric || recordlyric[6].lyriccnt },
  { name: 'August', Covers: recordcover || recordcover[7].covercnt, Users: recorduser || recorduser[7].usercnt, Lyrics: recordlyric || recordlyric[7].lyriccnt },
  { name: 'September', Covers: recordcover || recordcover[8].covercnt, Users: recorduser || recorduser[8].usercnt, Lyrics: recordlyric || recordlyric[8].lyriccnt },
  { name: 'October', Covers: recordcover || recordcover[9].covercnt, Users: recorduser || recorduser[9].usercnt, Lyrics: recordlyric || recordlyric[9].lyriccnt },
  { name: 'November', Covers: recordcover || recordcover[10].covercnt, Users: recorduser || recorduser[10].usercnt, Lyrics: recordlyric || recordlyric[10].lyriccnt },
  { name: 'December', Covers: recordcover || recordcover[11].covercnt, Users: recorduser || recorduser[11].usercnt, Lyrics: recordlyric || recordlyric[11].lyriccnt }
  
];


return (
  <div className="mybox  is-centered">
    <h1 className="title is-3">Site Traffic</h1><br></br><br></br>
    <div className="App">
      <LineChart width={800} height={400} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Users" stroke="#888523" />
        <Line type="monotone" dataKey="Covers" stroke="#8884d8" />
        <Line type="monotone" dataKey="Lyrics" stroke="#8456d8" />

      </LineChart>

    </div>

  </div>
);
}
export default TrafficBar;

