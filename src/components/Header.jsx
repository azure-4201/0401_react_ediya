import React from "react";
// import { headerData } from "../data/headerData";
import { menuData, memberData } from "../data/headerData";

const Header = () => {
  return (
    <header id="header">
      <div className="header_inner">
        <div className="logo">
          <a href="#">
            EDIYA AA <em>coffee</em>
          </a>
        </div>
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
      </div>
    </header>
  );
};

export default Header;
