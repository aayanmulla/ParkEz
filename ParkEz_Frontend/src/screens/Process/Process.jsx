import React from "react";
import GpsFixed from '../../components/GpsFixed/GpsFixed.jsx';
import "./Process.css";
const Process = () => {
    return(
        <div className="layout">
        <div className="container-2">
        <div className="content">
            <div className="list">
            <div className="list-item">
                <GpsFixed className="gps-fixed-instance" />
                <div className="div-2">
                <div className="heading">Find Nearby Parking</div>

                <p className="text">
                    Use our search feature to find the nearest ParkEz location
                    with available parking spots. Enter your location or let our
                    website detect it for you automatically.
                </p>
                </div>
            </div>

            <div className="list-item">
                <img
                className="img-2"
                alt="Rectangle"
                src="https://c.animaapp.com/BPgiiEYf/img/rectangle-329-1@2x.png"
                />

                <div className="div-2">
                <div className="heading">Book Your Spot</div>

                <p className="text">
                    Select your preferred parking slot and book it online. Enjoy
                    the convenience of reserving your spot in advance, ensuring
                    a hassle-free experience when you arrive.
                </p>
                </div>
            </div>

            <div className="list-item">
                <img
                className="img-2"
                alt="Group"
                src="https://c.animaapp.com/BPgiiEYf/img/group@2x.png"
                />

                <div className="div-2">
                <div className="heading">Find And Go</div>

                <p className="text">
                    Upon arrival, follow the directions to your reserved spot.
                    Our automated system ensures a smooth parking experience.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};
export default Process;