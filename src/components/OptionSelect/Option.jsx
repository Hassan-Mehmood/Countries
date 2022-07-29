import React, { useContext } from "react";
import { SearchContext } from "../../App";
import style from "./Option.module.css";

const Option = ({ theme }) => {
  const { setFilterRegion } = useContext(SearchContext);

  const handleFilter = (e) => {
    setFilterRegion(e.target.value);
  };

  return (
    <div className={` ${theme === "light" ? "elementLight" : "elementDark"} `}>
      <select
        name="countries"
        id="select"
        onChange={handleFilter}
        className={`${style.select} ${theme === "light" ? "" : "textWhite"} `}
      >
        <option className={style.option} value="All">
          Filter by Region
        </option>
        <option className={style.option} value="Africa">
          Africa
        </option>
        <option className={style.option} value="Americas">
          America
        </option>
        <option className={style.option} value="Asia">
          Asia
        </option>
        <option className={style.option} value="Europe">
          Europe
        </option>
        <option className={style.option} value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
};

export default Option;
