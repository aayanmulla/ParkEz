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

    // ✅ Function to Handle Booking Payment
    const handlePayment = async (slotId) => {
        const options = {
            key: "rzp_test_BXkN5c2xpZvM66",
            amount: 500 * 100, // Amount in paisa (500 INR)
            currency: "INR",
            name: "ParkEz",
            description: "Parking Slot Payment",
            handler: async function (response) {
                console.log("Payment Successful:", response);

                // ✅ Update the slot status in the backend
                await fetch(`http://localhost:5001/api/parking/book/${slotId}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ paymentId: response.razorpay_payment_id }),
                });

                // ✅ Update UI (Change slot color to red)
                setParkingSlots((prevSlots) =>
                    prevSlots.map((slot) =>
                        slot.id === slotId ? { ...slot, isOccupied: true } : slot
                    )
                );
            },
            prefill: {
                name: "Aayan Mulla",
                email: "aayanmulla10@gmail.com",
                contact: "7083076077"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

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
                        {parkingSlots.map((slot) => (
                            <div
                                key={slot.id}
                                className={`parking-slot ${
                                    slot.isOccupied === null ? "under-construction" :
                                    slot.isOccupied ? "occupied" : "available"
                                }`}
                                onClick={() => {
                                    if (!slot.isOccupied) {
                                        handlePayment(slot.id);
                                    }
                                }}
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
