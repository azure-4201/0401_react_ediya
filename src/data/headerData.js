// 첫번째 방법

// export const headerData = {
//   menu: ["Menu", "Service", "Campaign", "Benefit", "Collection", "information"],
//   member: ["로그인", "회원가입"],
// };

/*
첫번째 방법 - jsx

<div className="header_menu">
  <ul>
    {headerData.menu.map((menu, idx) => (
      <li key={idx}>
        <a href="assets/html/sudpage_01.html">{menu}</a>
      </li>
    ))}
  </ul>
</div>
<div className="header_member">
  {headerData.member.map((member, idx) => (
    <a href="#" key={idx}>
      {member}
    </a>
  ))}
</div>
*/

// 두번째 방법

// export const menuData = ["헤더 영역", "슬라이드 영역", "배너 영역", "컨텐츠 영역", "푸터 영역"];
// export const memberData = ["로그인", "회원가입"];

/*
두번째 방법 - jsx

<div className="header_menu">
  <ul>
    {menuData.map((menu) => (
      <li>
        <a href="assets/html/sudpage_01.html">{menu}</a>
      </li>
    ))}
  </ul>
</div>
<div className="header_member">
  {memberData.map((member) => (
    <a href="#">{member}</a>
  ))}
</div>
*/

// 세번째 방법

export const menuData = [
  { title: "Menu", link: "#image_type" },
  { title: "Service", link: "#imagetxt_type" },
  { title: "Campaign", link: "#card_type" },
  { title: "Benefit", link: "#banner_type" },
  { title: "Collection", link: "#txt_type" },
  { title: "information", link: "#footer_type" },
];
export const memberData = [
  { title: "로그인", link: "#" },
  { title: "회원가입", link: "#" },
];

/*
세번째 방법 - jsx

<div className="header_menu">
  <ul>
    {menuData.map((menu, idx) => (
      <li key={idx}>
        <a href={menu.link}>{menu.title}</a>
      </li>
    ))}
  </ul>
</div>
<div className="header_member">
  {memberData.map((member, idx) => (
    <a key={idx} href={member.link}>
      {member.title}
    </a>
  ))}
</div>
*/
