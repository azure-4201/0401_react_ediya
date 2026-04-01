import React, { useEffect } from "react";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Img from "./components/Img";
import Imgtxt from "./components/Imgtxt";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Txt from "./components/Txt";
import Footer from "./components/Footer";

import link from "./utils/link";
import reveal from "./utils/reveal";
import smooth from "./utils/smooth";

const App = () => {
  useEffect(() => {
    link();
    reveal();
    smooth();
  });
  return (
    <>
      <Header />
      <Slider title="슬라이드 유형" />
      <Img title="이미지 유형 만들기" />
      <Imgtxt title="이미지 텍스트 유형" color="blue" />
      <Card title="카드 유형 만들기" />
      <Banner title="배너 유형 만들기" />
      <Txt title="텍스트 유형" />
      <Footer title="푸터 유형" />
    </>
  );
};

export default App;
