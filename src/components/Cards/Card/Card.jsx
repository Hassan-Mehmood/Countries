import React from "react";

import style from "./Card.module.css";

const Card = ({ flag, name, population, capital, region, theme }) => {
  return (
    <div
      className={`${
        theme === "light" ? "backgroundLightGray" : "backgroundDarkBlue"
      } ${style.card}`}
    >
      <img src={flag} alt="Country Flag" />
      <div className={style.cardContent}>
        <h3>{name}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
