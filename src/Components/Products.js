import React from "react";
import "../Styles/main.css";
import img1 from "../Images/1.jpg";
import img23 from "../Images/23.jpg";
import img44 from "../Images/44.jpg";
import img21 from "../Images/21.jpg";
import img24 from "../Images/24.jpg";
import img36 from "../Images/36.jpg";
import img37 from "../Images/37.jpg";
import img39 from "../Images/39.jpg";

const Products = () => {
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2 className="h2">
                  our <strong className="black">products</strong>
                </h2>
                <span>
                  We package the products with best services to make you a happy
                  customer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bg">
        <div className="product-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img1} alt="" />
                  </i>
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img23} alt="" />
                  </i>
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img44} alt="" />
                  </i>
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img21} alt="" />
                  </i>
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img24} alt="" />
                  </i>
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img36} alt="" />
                  </i>
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img37} alt="" />
                  </i>
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i>
                    <img src={img39} alt="" />
                  </i>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
