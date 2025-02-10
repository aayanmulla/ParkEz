import React from 'react';
import StylePrimarySmallWrapper from "../../components/StylePrimarySmallWrapper/StylePrimarySmallWrapper.jsx";
import TypeDefault  from "../../components/TypeDefault/TypeDefault.jsx";
import "./Join.css";
const Join = () => {
    return (
        <div className="Cta">
                <div className="column-5">
                <div className="div-3">
                    <div className="heading-4">Join the Parking Revolution</div>

                    <p className="text-4">
                    Experience hassle-free parking with our innovative solutions
                    tailored for urban environments.
                    </p>
                </div>

                <div className="actions-2">
                    <div className="form">
                    <TypeDefault
                        className="type-default-alternate-true"
                        divClassName="design-component-instance-node"
                        text="Your Email Here"
                    />
                    <StylePrimarySmallWrapper
                        className="style-primary-small-false-alternate-true-icon-position-no-icon"
                        divClassName="style-primary-small-false-alternate-true-icon-position-no-icon-instance"
                        text="Get Started"
                    />
                    </div>

                    <p className="by-clicking-sign-up">
                    By clicking Get Started, you agree to our Terms and Conditions.
                    </p>
                </div>
                </div>
            </div>
    );
};
export default Join;