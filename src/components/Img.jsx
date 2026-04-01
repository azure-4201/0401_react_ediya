import React, { useEffect, useRef } from "react";
import { imgData } from "../data/imgData";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

const Img = (props) => {
  const imgInnerRef = useRef(null);
  const imgRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

    gsap.fromTo(
      imgRef.current,
      {
        // from
        scale: 0.5,
        opacity: 0,
      },
      {
        // to
        scale: 1,
        opacity: 1,
        duration: 0.5,
        // stagger: 0.2,

        scrollTrigger: {
          trigger: imgInnerRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section id="image_type" className="section">
      <h1 className="blind">{props.title}</h1>
      <h2>
        Always beside you, <em>EDIYA COFFEE</em>
      </h2>
      <p>한 잔의 커피 그 이상의 감동을 경험하세요.</p>
      <div className="image_inner container" ref={imgInnerRef}>
        {imgData.map((img, idx) => (
          <article className={`image ${img.className}`} key={img.id} ref={(el) => (imgRef.current[idx] = el)}>
            <h3 className="image_title">{img.title}</h3>
            <p className="image_desc1">{img.desc1}</p>
            <p className="image_desc2">{img.desc2}</p>
            <a className={`image_btn ${img.btnClass}`} href={`${img.road}`}>
              자세히 보기
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Img;
