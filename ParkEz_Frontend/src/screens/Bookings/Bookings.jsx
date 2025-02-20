import React from "react";
import "./Bookings.css";
import Navbar from "../NavBar/NavBar";

const Bookings = () => {
    return (
        <div className="bookings-container">
            <Navbar />
            <h1 className="bookings-heading">Bookings</h1>
            <div className="bookings-content">
                <div className="booking-card">
                    <h2 className="booking-card-heading">Booking 1</h2>
                    <p className="booking-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="booking-card">
                    <h2 className="booking-card-heading">Booking 2</h2>
                    <p className="booking-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="booking-card">
                    <h2 className="booking-card-heading">Booking 3</h2>
                    <p className="booking-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
};
export default Bookings;