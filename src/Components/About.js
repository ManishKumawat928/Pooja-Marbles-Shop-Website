import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import about_img from "../Images/21.jpg";
const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(true);
  };
  return (
    <>
      <Navbar />
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img_container">
                <div className="img-box">
                  <img src={about_img} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="detail-box">
                <div className="heading_container ">
                  <h2>Who Are We?</h2>
                </div>
                <p>
                  Welcome to Pooja Marble! Established in 2009, we take pride in
                  offering exquisite marble art frames and statues that
                  seamlessly blend beauty and craftsmanship. At Pooja Marble,
                  we're not just sellers; we're curators of marble art. Our goal
                  is to provide you with carefully selected pieces that add a
                  touch of elegance to your spaces.
                </p>
                {showMore && (
                  <div className="more-content">
                    Our collection features handpicked marble art created by
                    skilled artisans. Each piece is a testament to the timeless
                    appeal of marble, and we're excited to share this beauty
                    with you. As a local business, we've built a community
                    around our passion for marble art. Our clients are more than
                    customers, they're individuals who appreciate the unique
                    charm of our carefully curated collection.Explore our
                    collection and be a part of Pooja Marble's story. Thank you
                    for joining us on this creative adventure!
                  </div>
                )}
                {!showMore && (
                  <div className="btn-box">
                    <button onClick={handleReadMore}>Read More</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
