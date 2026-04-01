import React from "react";
import { imgtxtData } from "../data/imgtxtData";

import AOS from "aos";
import "aos/dist/aos.css";

// const Imgtxt = ({title, color}) => {
//   <h2 className="blind">{title}</h2>
//   <h3 className={`title ${color}`}>{imgtxtData.subtitle}</h3>
// }

const Imgtxt = (props) => {
  AOS.init();

  return (
    <section id="imagetxt_type" className="section">
      <h2 className="blind">{props.title}</h2>
      <div className="imagetxt_inner container">
        <div className="imagetxt_txt">
          <div className="small">{imgtxtData.title}</div>
          <h3 className={`title ${props.color}`}>{imgtxtData.subtitle}</h3>
          <div className="desc">{imgtxtData.desc}</div>
          <ul className="list">
            {imgtxtData.list.map((list, idx) => (
              <li key={idx}>
                <a href="#">{list}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="imagetxt_img">
          <ul className="img_capt capt1">
            {imgtxtData.capt1.map((capt1, idx) => (
              <li key={capt1.id} data-aos="zoom-in" data-aos-delay={idx * 300}>
                <a href="#" className={capt1.btnClass}>
                  {capt1.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="img_capt capt2">
            {imgtxtData.capt2.map((capt2, idx) => (
              <li key={capt2.id} data-aos="zoom-in" data-aos-delay={idx * 300}>
                <a href="#" className={capt2.btnClass}>
                  {capt2.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Imgtxt;
