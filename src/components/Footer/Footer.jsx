import React from "react";
import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];
const quickLinks02 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];
const quickLinks03 = [
  {
    path: "#",
    display: "Products",
  },
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Guide",
  },
];
const Footer = () => {
  const year=  new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>DeTechMatrix</h2>
            <p className="description">let's make it tech just for you.</p>

            <p className="small__text description">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio tempora voluptatem asperiores. Explicabo quae aliquam rem tempora, cum similique.
            </p>
          </div>
          <div className="footer__quick_links">
            <div className="quick__links_title">Solutions </div>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__links_item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick_links">
            <div className="quick__links_title">Company </div>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__links_item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick_links">
            <div className="quick__links_title">Surport </div>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__links_item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy__right">Copyright {year}, all rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
