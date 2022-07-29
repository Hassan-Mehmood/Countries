import React, { useContext } from "react";
import style from "./SearchField.module.css";
import { GoSearch } from "react-icons/go";
import Option from "../OptionSelect/Option";
import { SearchContext } from "../../App";

const SearchField = ({ theme }) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div
      className={`${
        theme === "light" ? "backgroundLightGray" : "backgroundDark"
      }`}
    >
      <form className={`container ${style.form} `}>
        <div
          className={`${style.inputBox} ${
            theme === "light" ? "elementLight" : "elementDark"
          }`}
        >
          <GoSearch className={style.searchIcon} />{" "}
          <input
            type="text"
            placeholder="Search by country name or capital"
            className={`${
              theme === "light" ? "elementLight" : "elementDark textWhite"
            }`}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <Option theme={theme} />
      </form>
    </div>
  );
};

export default SearchField;
