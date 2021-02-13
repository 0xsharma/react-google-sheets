import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
// import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1pat2DELMEuTPEgHKbSDXK6Ci5HKJpqWsbOTdkUAueeE",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <center>
      <br /><br /><br />
      <h1>All Event Details: </h1>
      <br /><br />

      <table style={{borderStyle:'groove', borderCollapse:'collapse'}}>
        <tr >
          <td style={{borderStyle:'groove'}}><b>Event Name</b></td>
          <td style={{borderStyle:'groove'}}><b>Event Place</b></td>
          <td style={{borderStyle:'groove'}}><b>Event Start Time</b></td>
          <td style={{borderStyle:'groove'}}><b>Event End Time</b></td>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td style={{border:'1px solid black'}}>{item.EventName}</td>
            <td style={{border:'1px solid black'}}>{item.EventPlace}</td>
            <td style={{border:'1px solid black'}}>{item.EventStartTime}</td>
            <td style={{border:'1px solid black'}}>{item.EventEndTime}</td>
            
            <br />
          </tr>
        ))}
      </table>
    </center>
  );
}