import React from "react";
import "../../styles/services.css";

const ServicesData = [
  {
    icon: "ri-apps-line",
    title: "Software Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu aliquam aliquam, nunc nunc lLorem ipsum dolor sit amet.",
  },
  {
    icon: "ri-pages-line",
    title: "Product Desgin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu aliquam aliquam, nunc nunc lLorem ipsum dolor sit amet.",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphics Desgin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu aliquam aliquam, nunc nunc lLorem ipsum dolor sit amet.",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu aliquam aliquam, nunc nunc lLorem ipsum dolor sit amet.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
          <div className="services__top_content">
            <h6 className="subtitle">Our Services</h6>
            <h2>Save time managing your business with</h2>
            <h2 className="highlight">Our top-nocth services</h2>
          </div>
          <div className="services__bottom_content">
            {ServicesData.map((item, index) => (
              <div className="services__bottom_item" key={index}>
                <span className="service__icon">
                  <i class={item.icon}></i>
                </span>
                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc} </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Services;
