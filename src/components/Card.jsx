import React from "react";
import { cardData } from "../data/cardData";

import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  AOS.init();
  return (
    <section id="card_type" className="section">
      <h1 className="blind">{props.title}</h1>
      <h2>이디야커피와 함께 하는 향기로운 동행</h2>
      <p>
        나눔의 기쁨을 행동으로 이디야 커피가 먼저 실천합니다. 앞으로도 따뜻한 마음과 기쁨을 나누기 위해 나아가겠습니다.
      </p>
      <div className="card_inner container">
        {cardData.map((card, index) => (
          <article className="card" key={card.id} data-aos="flip-left" data-aos-delay={index * 150}>
            <figure className="card_header">
              <img src={card.img} alt="캠페인이미지" />
            </figure>
            <div className="card_body">
              <h3 className="card_title">{card.title}</h3>
              <p className="desc">{card.desc}</p>
              <a href="#" className="btn">
                더 자세히 보기
                <span>
                  <svg width="55" height="8" viewBox="0 0 55 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M54.3536 4.03544C54.5488 3.84018 54.5488 3.52359 54.3536 3.32833L51.1716 0.146351C50.9763 -0.0489113 50.6597 -0.0489113 50.4645 0.146351C50.2692 0.341613 50.2692 0.658195 50.4645 0.853458L53.2929 3.68188L50.4645 6.51031C50.2692 6.70557 50.2692 7.02216 50.4645 7.21742C50.6597 7.41268 50.9763 7.41268 51.1716 7.21742L54.3536 4.03544ZM0 3.68188V4.18188H54V3.68188V3.18188H0V3.68188Z"
                      fill="#818181"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Card;
