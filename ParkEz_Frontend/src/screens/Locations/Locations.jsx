import React from "react";
import { useNavigate } from "react-router-dom";
import PinFill from "../../components/PinFill/PinFill.jsx";
import { Card, CardContent, Typography } from "@mui/material";
import "./Locations.css";

const Locations = () => {
    const navigate = useNavigate();
    return (
        <div className="location-layout">
            <div className="loction-container">
                <div className="content">
                    <div className="location-div-0">
                        <p className="location-heading-1">
                            Explore Our Convenient Parking Solutions at Key Locations
                        </p>
                        <p className="location-text">
                            Discover hassle-free parking with our innovative system. Book
                            your spot with ease and enjoy real-time updates.
                        </p>
                    </div>

                    {/* Cards Row */}
                    <div className="row-wrapper">
                        <div className="row">
                            {/* Card 1 */}
                            <Card className="locations-card shadow-lg rounded-lg" sx={{ flex: 1, minWidth: 300 }}>
                                <CardContent>
                                    <div className="flex items-center gap-2">
                                        <PinFill />
                                        <Typography
                                            variant="h6"
                                            className="cursor-pointer text-blue-600 font-semibold"
                                            onClick={() => navigate("/bookings")}
                                        >
                                            Ajeenkya DY Patil
                                        </Typography>
                                    </div>
                                    <Typography variant="body2" color="textSecondary">
                                        Available parking spaces and online booking at your fingertips.
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* Card 2 */}
                            <Card className="locations-card shadow-lg rounded-lg" sx={{ flex: 1, minWidth: 300 }}>
                                <CardContent>
                                    <div className="flex items-center gap-2">
                                        <PinFill />
                                        <Typography variant="h6" className="font-semibold">
                                            Baner Coming Soon
                                        </Typography>
                                    </div>
                                    <Typography variant="body2" color="textSecondary">
                                        Stay tuned for future parking solutions in this area.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Location Image */}
                    <div className="location-image">
                        <img
                            alt="Placeholder"
                            src="https://c.animaapp.com/BPgiiEYf/img/placeholder-image.png"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
