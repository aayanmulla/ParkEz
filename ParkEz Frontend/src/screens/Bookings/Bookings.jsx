import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bookings.css"; // Assuming you have a CSS file for styling

// const Bookings = () => {
//   const [slots, setSlots] = useState([]);
//   const [totalSlots, setTotalSlots] = useState(0);

//   useEffect(() => {
//     // Fetch slot details from the backend
//     axios.get("/api/slots") // Replace with your backend API endpoint
//       .then(response => {
//         setSlots(response.data);
//         setTotalSlots(response.data.length);
//       })
//       .catch(error => {
//         console.error("Error fetching slot details:", error);
//       });
//   }, []);

//   return (
//     <div className="bookings">
//       <h1>Total Slots: {totalSlots}</h1>
//       <div className="slots-container">
//         {slots.map((slot, index) => (
//           <div
//             key={index}
//             className={`slot ${slot.isAvailable ? "available" : "filled"}`}
//           >
//             Slot {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Bookings;
function Bookings() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
      // const fetchSlots = () => {
      //     fetch("http://localhost:5000/api/parking")
      //         .then(res => res.json())
      //         .then(data => setSlots(data));
      // };
      // fetchSlots();
      // const interval = setInterval(fetchSlots, 5000); // Refresh every 5 seconds
      // return () => clearInterval(interval);
  }, []);

  return (
      <div>
          <h2>Live Parking Status</h2>
          <table>
              <thead>
                  <tr>
                      <th>Slot ID</th>
                      <th>Status</th>
                      <th>Floor</th>
                      <th>Last Updated</th>
                  </tr>
              </thead>
              <tbody>
                  {slots.map(slot => (
                      <tr key={slot.slot_id}>
                          <td>{slot.slot_id}</td>
                          <td style={{ color: slot.status === "occupied" ? "red" : slot.status === "reserved" ? "blue" : "green" }}>
                              {slot.status}
                          </td>
                          <td>{slot.slot_id <= 4 ? "Ground Floor" : "First Floor"}</td>
                          <td>{new Date(slot.timestamp).toLocaleTimeString()}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}
export default Bookings;