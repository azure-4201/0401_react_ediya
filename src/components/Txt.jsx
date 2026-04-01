import React, { useEffect, useRef } from "react";
import { textData } from "../data/textData";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

const Txt = (props) => {
  // 요소가 1개 일때 useRef(null);
  // 요소가 여러개 일때 useRef([]); []빈대열로 초기화시킴

  const txtInnerRef = useRef(null);
  const txtRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

    gsap.fromTo(
      txtRef.current,
      // from
      {
        y: 300,
        opacity: 0,
      },
      // to
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,

        scrollTrigger: {
          trigger: txtInnerRef.current,
          start: "top 80%",
          // scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section id="txt_type" className="section">
      <h1 className="blind">{props.title}</h1>
      <span>텍스트 유형01</span>
      <h2>다체로운 음료&푸드 컬렉션</h2>
      <div className="txt_inner container" ref={txtInnerRef}>
        {textData.map((text, idx) => (
          <div className={`txt ${text.icon}`} key={text.id} ref={(element) => (txtRef.current[idx] = element)}>
            <h3 className="txt_title">{text.title}</h3>
            <p className="desc">{text.desc}</p>
            <a className="btn" href="#">
              더보기
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Txt;
