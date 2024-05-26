import React from "react";
import "../../styles/Testimonial.css";
import Slider from "react-slick";
import ava01 from "../../images/ava-1.jpg";
import ava02 from '../../images/ava-2.jpg';
import ava03 from'../../images/ava-3.jpg';

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide:true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__content_top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by many people <span className="highlight">Worldwide</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">John Doe</h5>
                  <p className="description">CEO Vicotech</p>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Willson Mason</h5>
                  <p className="description">Snr Brand Identity Manager</p>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Victor Smith</h5>
                  <p className="description">CEO Vicotech</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
