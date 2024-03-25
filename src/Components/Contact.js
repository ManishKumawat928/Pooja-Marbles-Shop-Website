import "../Styles/main.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gw4wt9k", "template_7p9zuho", form.current, {
        publicKey: "yywkgc7eOvZpISuIR",
      })
      .then(
        () => {
          toast.success("Contact Details Submitted Successfully!");
        },
        (error) => {
          toast.error("Failed! Please try again!");
        }
      );
  };
  return (
    <>
      <Navbar />
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Toaster position="top-center" reverseOrder={false} />
              <form ref={form} onSubmit={sendEmail} className="main_form">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      className="form-control"
                      placeholder="Your name"
                      type="text"
                      name="from_name"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="text"
                      name="from_email"
                    />
                  </div>
                  <div className=" col-md-12">
                    <input
                      className="form-control"
                      placeholder="Phone"
                      type="text"
                      name="from_phone"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      name="message"
                    ></textarea>
                  </div>
                  <div className=" col-md-12">
                    <input className="send" value="Send" type="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
