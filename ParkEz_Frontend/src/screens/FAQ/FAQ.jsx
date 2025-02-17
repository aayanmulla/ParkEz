import React from "react";
import StyleSecondaryWrapper  from "../../components/StyleSecondaryWrapper/StyleSecondaryWrapper.jsx";
import "./FAQ.css";


const FAQ = () => {
    return(
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
                <p className="text-5">
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
                <p className="text-5">
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
                <p className="text-5">
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
                <p className="text-5">
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
                <p className="text-5">
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

              <p className="text-6">We&#39;re here to help you!</p>
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
    );
};
export default FAQ;