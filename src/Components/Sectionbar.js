import React, { useState } from "react";
import heroImage1 from "../Images/47.jpg";
import heroImage2 from "../Images/45.jpg";
import heroImage3 from "../Images/46.jpg";
import about_img from "../Images/21.jpg";

const Sectionbar = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(true);
  };
  return (
    <>
      <section>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={heroImage1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={heroImage3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={heroImage2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            style={{ zIndex: "-1" }}
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            style={{ zIndex: "-1" }}
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <br />
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
    </>
  );
};

export default Sectionbar;
