import React from "react";
import "../Styles/main.css";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const ConnectUs = () => {
  return (
    <>
      <div className="container">
        <div className="yellow_bg">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
              <div className="yellow-box">
                <h3>
                  REQUEST A FREE QUOTE
                  <i>
                    <IoCall />
                  </i>
                </h3>

                <p>If you want to ask us something please connect with us</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <div className="yellow-box">
                <Link to="/contact">Get Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid padi">
        <div className="map">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.5972364353383!2d75.59667069999999!3d27.4817957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ce6e9cddb22a9%3A0x71f4c4c131eb6355!2sPooja%20Marble%20Nd%20Tiles%20House!5e0!3m2!1sen!2sin!4v1709648418890!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ConnectUs;
