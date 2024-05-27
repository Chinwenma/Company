import React from "react";
import "../../styles/newsletter.css";
const Newsletter = () => {
  return (
    <section className="newsletter" >
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Newsletter</h6>
            <h2>
               Be ahead of the curve
              <span className="highlight"> get every tech update</span>
            </h2>
          </div>
          <div className="newsletter__form">
            <input type="email"  placeholder="Enter your Email"/>
            <button className="secondary__btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
