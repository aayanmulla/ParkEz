import React from "react";
import "./Bookings.css";
import Navbar from "../NavBar/NavBar";
import Reservation from "../Reservations/Reservation";
import Footer from "../Footer/Footer";

const Bookings = () => {
    const parkingSlots = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1,
        isOccupied: Math.random() < 1/2,
    }));

    return (
        <div className="bookings-container">
            <Navbar />
            <div className="bookings-content">
                <h1 className="bookings-heading">Ajeenkya DY Patil Parking Zone</h1>
                <div className="bookings-grid">
                    {parkingSlots.map((slot) => (
                        <div
                            key={slot.id}
                            className={`parking-slot ${slot.isOccupied ? "occupied" : "available"}`}
                        >
                            <span>Slot {slot.id}</span>
                            <span>{slot.isOccupied ? "Occupied" : "Available"}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Reservation />
            <Footer />
        </div>
    );
};

export default Bookings;