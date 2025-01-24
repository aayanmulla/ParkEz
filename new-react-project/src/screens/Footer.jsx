import React from "react"
import IconFacebook from '../icons/IconFacebook/IconFacebook.jsx';
import IconInstagram from '../icons/IconInstagram/IconInstagram.jsx';
import IconLinkedin from '../icons/IconLinkedin/IconLinkedin.jsx';
import IconX from '../icons/IconX/IconX.jsx';
import IconYoutube1 from '../icons/IconYoutube1/IconYoutube1.jsx';

const Footer = () => {
    return(
        <div className="footer">
            <img
                className="parkez-nobg-2"
                alt="Parkez nobg"
                src="https://c.animaapp.com/BPgiiEYf/img/parkez-nobg-2@2x.png"
            />

            <div className="content-5">
                <div className="column-6">
                    <div className="div-3">
                        <div className="content-6">
                            <div className="text-wrapper-3">Address:</div>

                            <p className="level-sample-st">
                                ADYPSOE, Lohegaon, Pune - 412105
                            </p>
                        </div>

                        <div className="content-6">
                            <div className="text-wrapper-3">Contact:</div>

                            <div className="div-4">
                                <div className="text-wrapper-4">1800 123 4567</div>

                                <div className="info-relume-io">info@parkez.in</div>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <IconFacebook className="icon-instance-node" />
                        <IconInstagram className="icon-instance-node" />
                        <IconX className="icon-instance-node" />
                        <IconLinkedin className="icon-instance-node" />
                        <IconYoutube1 className="icon-instance-node" />
                    </div>
                </div>

                <div className="column-7">
                    <div className="link-list">
                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Contact Us</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">About Us</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Services</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Support</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Blog</div>
                        </div>
                    </div>

                    <div className="link-list">
                        <div className="div-wrapper">
                            <div className="text-wrapper-5">FAQs</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Careers</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Feedback</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Partners</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-5">Events</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="credits">
                <div className="divider" />

                <div className="row-3">
                    <p className="element-relume-all">
                        © 2024 ParkEz. All rights reserved.
                    </p>

                    <div className="footer-links">
                        <div className="text-wrapper-6">Privacy Policy</div>

                        <div className="text-wrapper-6">Terms of Service</div>

                        <div className="text-wrapper-6">Cookies Settings</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;