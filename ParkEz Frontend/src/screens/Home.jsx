import React from "react";
import GpsFixed from '../components/GpsFixed/GpsFixed.jsx';
import PinFill  from "../components/PinFill/PinFill.jsx";
import PinFillWrapper from "../components/PinFillWrapper/PinFillWrapper.jsx";
import StylePrimarySmallWrapper from "../components/StylePrimarySmallWrapper/StylePrimarySmallWrapper.jsx";
import StyleSecondary  from "../components/StyleSecondary/StyleSecondary.jsx";
import StyleSecondaryWrapper  from "../components/StyleSecondaryWrapper/StyleSecondaryWrapper.jsx";
import TypeDefault  from "../components/TypeDefault/TypeDefault.jsx";
import AiEssentialsIconSet from '../icons/AiEssentialslconSet/AiEssentialsIconSet.jsx';
import "./style.css";
import Navbar from './NavBar/NavBar.jsx';
import Footer from './Footer.jsx';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <img
        className="header"
        alt="Header"
        src="https://c.animaapp.com/BPgiiEYf/img/header---9--.png"
      />

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

      <div className="layout">
        <div className="container-2">
          <div className="content">
            <div className="div-3">
              <p className="p">
                Explore Our Convenient Parking Solutions at Key Locations
              </p>

              <p className="text-2">
                Discover hassle-free parking with our innovative system. Book
                your spot with ease and enjoy real-time updates.
              </p>
            </div>

            <div className="row-wrapper">
              <div className="row">
                <div className="div-2">
                  <PinFill />
                  <div className="text-wrapper-2" onClick={() => navigate("/bookings")}
>Ajeenkya DY Patil</div>

                  <p className="text">
                    Available parking spaces and online booking at your
                    fingertips.
                  </p>
                </div>

                <div className="div-2">
                  <PinFillWrapper />
                  <div className="text-wrapper-2">Baner Coming Soon</div>

                  <p className="text">
                    Stay tuned for future parking solutions in this area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <img
            className="placeholder-image"
            alt="Placeholder image"
            src="https://c.animaapp.com/BPgiiEYf/img/placeholder-image.png"
          /> */}
        </div>
      </div>

      <div className="layout-2">
        <div className="section-title">
          <div className="div-3">
            <p className="heading-2">
              Explore Our Innovative Parking Solutions
            </p>

            <p className="text-2">
              Discover how ParkEz transforms urban parking with cutting-edge
              technology. Our solutions are designed for convenience and
              efficiency, making parking hassle-free.
            </p>
          </div>
        </div>

        <div className="content-2">
          <div className="row-2">
            <div className="column-2">
              <AiEssentialsIconSet className="img-2" />
              <div className="heading-3">Automated Parking System</div>

              <p className="text">
                Experience seamless parking with our automated system.
              </p>
            </div>

            <div className="column-2">
              <img
                className="img-2"
                alt="Rectangle"
                src="https://c.animaapp.com/BPgiiEYf/img/rectangle-329-1@2x.png"
              />

              <div className="heading-3">Online Slot Booking</div>

              <p className="text">Book your parking spot online with ease.</p>
            </div>

            <div className="column-2">
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

          <div className="column-3">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/BPgiiEYf/img/rectangle-332@2x.png"
            />

            <div className="heading-3">Mobile App (Coming Soon)</div>

            <p className="text-3">Access ParkEz features on the go.</p>
          </div>

          <div className="column-4">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/BPgiiEYf/img/rectangle-331@2x.png"
            />

            <div className="heading-3">EV Charging Station</div>

            <p className="text-3">Charge your electric vehicle effortlessly.</p>
          </div>
        </div>

        <div className="style-secondary-small-false-alternate-false-icon-position-no-icon-wrapper">
          <StyleSecondary
            className="style-secondary-small-false-alternate-false-icon-position-no-icon"
            divClassName="design-component-instance-node"
            text="Learn More"
          />
        </div>
      </div>

      <div className="CTA">
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

      <div className="FAQ">
        <div className="container-3">
          <div className="section-title-2">
            <div className="heading-5">FAQs</div>

            <p className="text-5">
              Find answers to common questions about our innovative parking
              solutions and services.
            </p>
          </div>

          <div className="accordion-list">
            <div className="div-4">
              <div className="question">
                <div className="question-2">What is ParkEz?</div>

                <img
                  className="icon"
                  alt="Icon"
                  src="https://c.animaapp.com/BPgiiEYf/img/icon-4.svg"
                />
              </div>

              <div className="answer">
                <p className="text-6">
                  ParkEz is an innovative parking management solution that
                  simplifies the process of finding and booking parking spaces.
                  Our system leverages IoT and cloud technology to provide
                  real-time availability and efficient management. Experience
                  seamless urban parking with ParkEz.
                </p>
              </div>
            </div>

            <div className="div-4">
              <div className="question">
                <div className="question-2">How to book slots?</div>

                <img
                  className="icon"
                  alt="Icon"
                  src="https://c.animaapp.com/BPgiiEYf/img/icon-4.svg"
                />
              </div>

              <div className="answer">
                <p className="text-6">
                  Booking a parking slot is easy with ParkEz. Simply search for
                  your desired location, select an available slot, and complete
                  the booking process online. You&#39;ll receive a confirmation
                  and details about your reservation.
                </p>
              </div>
            </div>

            <div className="div-4">
              <div className="question">
                <div className="question-2">Are EV stations available?</div>

                <img
                  className="icon"
                  alt="Icon"
                  src="https://c.animaapp.com/BPgiiEYf/img/icon-4.svg"
                />
              </div>

              <div className="answer">
                <p className="text-6">
                  Yes, ParkEz offers EV charging stations at select locations.
                  You can easily find these stations while searching for
                  parking. Enjoy the convenience of charging your electric
                  vehicle while you park.
                </p>
              </div>
            </div>

            <div className="div-4">
              <div className="question">
                <div className="question-2">What if no slots?</div>

                <img
                  className="icon"
                  alt="Icon"
                  src="https://c.animaapp.com/BPgiiEYf/img/icon-4.svg"
                />
              </div>

              <div className="answer">
                <p className="text-6">
                  If no parking slots are available, you will receive a
                  notification indicating that the location is full. We
                  recommend checking back later or exploring alternative nearby
                  locations. Our system is designed to keep you informed.
                </p>
              </div>
            </div>

            <div className="div-4">
              <div className="question">
                <div className="question-2">How to contact support?</div>

                <img
                  className="icon"
                  alt="Icon"
                  src="https://c.animaapp.com/BPgiiEYf/img/icon-4.svg"
                />
              </div>

              <div className="answer">
                <p className="text-6">
                  You can contact our support team through the &#39;Contact&#39;
                  section on our website. We are here to assist you with any
                  inquiries or issues you may have. Your satisfaction is our
                  priority.
                </p>
              </div>
            </div>
          </div>

          <div className="content-3">
            <div className="content-4">
              <div className="heading-6">Still have questions?</div>

              <p className="text-5">We&#39;re here to help you!</p>
            </div>

            <div className="style-secondary-small-false-alternate-false-icon-position-no-icon-wrapper">
              <StyleSecondaryWrapper
                className="style-secondary-instance"
                divClassName="design-component-instance-node"
                text="Contact"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />      
    </div>
  );
};

export default Home;