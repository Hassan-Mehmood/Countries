import React from "react";
import style from "./Header.module.css";
import { HiOutlineMoon } from "react-icons/hi";

const Header = ({ theme, setTheme }) => {
  const handleThemeClick = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  return (
    <div
      className={`${
        theme === "light" ? " backgroundLight " : " backgroundDarkBlue "
      }  ${style.header}`}
    >
      <div className={`${style.headContent} container flex`}>
        <h2>Where in the World?</h2>
        <div className={style.themeBtn} onClick={handleThemeClick}>
          <HiOutlineMoon /> <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
