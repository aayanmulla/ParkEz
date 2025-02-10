import React from "react";
import AiEssentialsIconSet from '../../icons/AiEssentialslconSet/AiEssentialsIconSet.jsx';
import StyleSecondary  from "../../components/StyleSecondary/StyleSecondary.jsx";
import "./Features.css";
const Features = () => {
    return (
        <div className="layout">
            <div className="container-2">
                <div className="div-4">
                    <p className="heading-2">
                        Explore Our Innovative Parking Solutions
                    </p>

                    <p className="text-2">
                        Discover how ParkEz transforms urban parking with cutting-edge
                        technology. Our solutions are designed for convenience and
                        efficiency, making parking hassle-free.
                    </p>
                <div className="content-2">
                    <div className="row-2">
                        <div className="column-2">
                            <AiEssentialsIconSet className="img-2"/>
                            <div className="heading-3">Automated Parking System</div>

                            <p className="text">
                            Experience seamless parking with our automated system.
                            </p>
                        </div>

                        <div className="f-2">
                            <img
                            className="img-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/BPgiiEYf/img/rectangle-329-1@2x.png"
                            />

                            <div className="heading-3">Online Slot Booking</div>

                            <p className="text">Book your parking spot online with ease.</p>
                        </div>

                        <div className="f-3">
                            <img
                                className="rectangle"
                                alt="Rectangle"
                                src="https://c.animaapp.com/BPgiiEYf/img/rectangle-330@2x.png"
                            />

                            <div className="heading-3">Real-time Space Availability</div>

                            <p className="text">
                                Check available spaces in real-time for convenience.
                            </p>
                            </div>
                    </div>

                    <div className="f-4">
                        <img
                        className="rectangle"
                        alt="Rectangle"
                        src="https://c.animaapp.com/BPgiiEYf/img/rectangle-332@2x.png"
                        />

                        <div className="heading-3">Mobile App (Coming Soon)</div>

                        <p className="text-3">Access ParkEz features on the go.</p>
                    </div>

                    <div className="f-5">
                        <img
                        className="rectangle"
                        alt="Rectangle"
                        src="https://c.animaapp.com/BPgiiEYf/img/rectangle-331@2x.png"
                        />

                        <div className="heading-3">EV Charging Station</div>

                        <p className="text-3">Charge your electric vehicle effortlessly.</p>
                    </div>
                    <div className="style-secondary-small-false-alternate-false-icon-position-no-icon-wrapper">
                        <StyleSecondary
                            className="style-secondary-small-false-alternate-false-icon-position-no-icon"
                            divClassName="design-component-instance-node"
                            text="Learn More"
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Features;