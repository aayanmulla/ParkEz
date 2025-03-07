import React, { useState, useEffect } from "react";
import "./Bookings.css";
import Navbar from "../NavBar/NavBar";
import Reservation from "../Reservations/Reservation";
import Footer from "../Footer/Footer";
import axios from "axios";

const Bookings = () => {
    const [parkingSlots, setParkingSlots] = useState([]);

    useEffect(() => {
        const fetchParkingSlots = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/parking/slots");
                let slots = response.data;

                // Reorder slots as per the required display format
                slots = [
                    slots[0], slots[1], slots[2], slots[3], // First row
                    slots[7], slots[6], slots[5], slots[4]  // Second row (Reversed)
                ];

                setParkingSlots(slots);
            } catch (error) {
                console.error("Error fetching parking slots:", error);
            }
        };

        fetchParkingSlots();
    }, []);

    return (
        <div className="bookings-container">
            <Navbar />
            <div className="bookings-content">
                <h1 className="bookings-heading">Ajeenkya DY Patil Parking Zone</h1>
                <div className="bookings-grid">
                    {parkingSlots.length > 0 ? (
                        parkingSlots.map((slot) => (
                            <div
                                key={slot.slotNumber}
                                className={`parking-slot ${slot.isOccupied ? (slot.status ? "under-construction" : "occupied") : "available"}`}
                            >
                                <span>Slot {slot.slotNumber}</span>
                                <span>
                                    {slot.status
                                        ? "Under Construction"
                                        : slot.isOccupied
                                        ? "Occupied"
                                        : "Available"}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p>Loading slots...</p>
                    )}
                </div>
            </div>
            <Reservation />
            <Footer />
        </div>
    );
};

export default Bookings;
