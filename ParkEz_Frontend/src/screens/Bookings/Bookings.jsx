import React, { useEffect, useState } from "react";
import "./Bookings.css";
import Navbar from "../NavBar/NavBar";
import Reservation from "../Reservations/Reservation";
import Footer from "../Footer/Footer";

const Bookings = () => {
    const [parkingSlots, setParkingSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParkingSlots = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/parking/slots");
                if (!response.ok) {
                    throw new Error("Failed to fetch parking slots");
                }
                const data = await response.json();
                setParkingSlots(data.parkingSlots || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching parking slots:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchParkingSlots();
        const interval = setInterval(fetchParkingSlots, 5000); // Refresh every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bookings-container">
            <Navbar />
            <div className="bookings-content">
                <h1 className="bookings-heading">Ajeenkya DY Patil Parking Zone</h1>

                {loading ? (
                    <p>Loading parking slots...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    <div className="bookings-grid">
                        {parkingSlots.map((slot, index) => (
                            <div
                                key={index}
                                className={`parking-slot ${
                                    slot.isOccupied === null ? "under-construction" :
                                    slot.isOccupied ? "occupied" : "available"
                                }`}
                            >
                                <span>Slot {slot.id}</span>
                                <span>
                                    {slot.isOccupied === null ? "Under Construction" :
                                    slot.isOccupied ? "Occupied" : "Available"}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Reservation />
            <Footer />
        </div>
    );
};

export default Bookings;
