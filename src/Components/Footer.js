import React, { useState } from "react";
import "../Styles/main.css";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSendButtonClick = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email address");
    } else {
      alert(`Email sent to: ${email}`);
      navigate("/");
    }
  };
  return (
    <>
      <footr>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <ul className="sociel">
                  <li>
                    <Link to="https://www.facebook.com/profile.php?id=100016336217245&mibextid=ZbWKwL">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/pooja_marble0777/">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <Link to="https://wa.me/message/SDZWA5BA33HJG1">
                      <FaWhatsapp />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>conatct us</h3>
                  <span>
                    FHJW+PM7, Shrimadhopur, Rajasthan 332715,
                    <br />
                    <FaPhone style={{ fontSize: "20px" }} />
                    <Link to="tel:+91 73740 34602">+91 73740 34602</Link>
                    <br />
                    <CiMail style={{ fontSize: "25px" }} />
                    <Link to="mailto:aufoodielover@gmail.com">
                      poojamarble0777@gmail.com
                    </Link>
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>ADDITIONAL LINKS</h3>
                  <ul className="lik">
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/terms-of-service">Terms of Service</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Information</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>service</h3>
                  <ul className="lik">
                    <li>
                      <p>Exquisite Marble Art Frames</p>
                    </li>
                    <li>
                      <p>EliteMarbles</p>
                    </li>
                    <li>
                      <p>Artistic Marble Statues</p>
                    </li>
                    <li>
                      <p>MarbleElegance</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>Let's Get In Touch</h3>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <br />
                  <button onClick={handleSendButtonClick} className="footerbtn">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              &copy;Copyright 2024 All Right Reserved.Powered By{" "}
              <a href="https://www.instagram.com/pooja_marble0777/">
                Pooja Marbles
              </a>
            </p>
          </div>
        </div>
      </footr>
    </>
  );
};

export default Footer;
