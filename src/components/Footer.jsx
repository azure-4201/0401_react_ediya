import React from "react";
import { footerData } from "../data/footerData";

const Footer = (props) => {
  return (
    <section id="footer_type" className="section">
      <h1 className="blind">{props.title}</h1>
      <div className="footer_inner container">
        <div className="footer_menu">
          {footerData.map((footer_menu, idx) => (
            <div key={idx}>
              <h2>{footer_menu.title}</h2>
              <ul>
                {footer_menu.links.map((links, idx) => (
                  <li key={idx}>
                    <a href="#">{links}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer_copyright">
          ⓒ 2017 EDIYA COFFEE COMPANY.
          <br />
          ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
};

export default Footer;
