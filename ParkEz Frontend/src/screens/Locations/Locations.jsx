import React from "react";
import { useNavigate } from "react-router-dom";
import PinFill  from "../../components/PinFill/PinFill.jsx";
import "./Locations.css";

const Locations = () => {
    const navigate = useNavigate();
    return(
        <div className="location-layout">
            <div className="loction-container">
            <div className="content">
                <div className="location-div-0">
                <p className="location-heading-1">
                    Explore Our Convenient Parking 
                    Solutions at Key Locations
                </p>
                
                <p className="location-text">
                    Discover hassle-free parking with our innovative system. Book
                    your spot with ease and enjoy real-time updates.
                </p>
                </div>

                <div className="row-wrapper">
                <div className="row">

                    <div className="location-div-1">
                    <PinFill />
                    <div className="location-text-wrapper" onClick={() => navigate("/bookings")}>Ajeenkya DY Patil</div>
                    <p className="location-text">
                        Available parking spaces and online booking at your
                        fingertips.
                    </p>
                    </div>

                    <div className="location-div-2">
                    <PinFill />
                    <div className="location-text-wrapper">Baner Coming Soon</div>
                    <p className="location-text">
                        Stay tuned for future parking solutions in this area.
                    </p>
                    </div>

                </div>
                </div>
            </div>
            <img
                className="location-image"
                alt="Placeholderimage"
                src="https://c.animaapp.com/BPgiiEYf/img/placeholder-image.png"
            />
            </div>
        </div>
    );
};
export default Locations;