// 기본문법
// const link = () => {};

const link = () => {
  document.querySelectorAll(".header_menu ul li a").forEach(function (li) {
    li.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });
};

export default link;
