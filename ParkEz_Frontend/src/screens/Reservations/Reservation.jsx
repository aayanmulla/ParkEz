import React from "react";
import "./Reservation.css";

const Reservation = () => {
    return (
        <div className="reservation-container">
            <h1 className="reservation-heading">Reserve Your Parking Slot Using 3 Simple Steps</h1>

            {/* New flex container for side-by-side images */}
            <div className="reservation-images">
                <img src="images/r-1.jpeg" alt="Step 1" className="r-1" />
                <img src="images/r-2.jpeg" alt="Step 2" className="r-2" />
                <img src="images/r-3.jpeg" alt="" className="r-3" />
            </div>

            <div className="reservation-content">
                <p>1. Select a Slot</p>
                <p>2. Confirm Date & Time</p>
                <p>3. Complete Payment</p>
            </div>
            <div className="reservation-content-2">
                <p>Choose an available parking space</p>
                <p>Verify and finalize your booking schedule</p>
                <p>Make the payment to secure your reservation</p>
            </div>
            <button className="reservation-button">Book Now</button>
        </div>
    );
};

export default Reservation;
