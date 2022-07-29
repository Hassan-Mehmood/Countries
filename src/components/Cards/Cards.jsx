import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../App";
import Card from "./Card/Card";
import style from "./Cards.module.css";

const Cards = ({ theme }) => {
  let [countries, setCountries] = useState([]);
  const { filterRegion, searchTerm } = useContext(SearchContext);

  const fetchCountries = async () => {
    const item = JSON.parse(localStorage.getItem("countries"));

    if (item) {
      setCountries(() => (countries = item));
    } else {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      localStorage.setItem("countries", JSON.stringify(data));

      setCountries(() => (countries = data));
    }
  };

  useEffect(() => {
    fetchCountries().catch("Some thing wrong");
  }, []);

  return (
    <div
      className={`${
        theme === "light" ? "backgroundLightGray" : "backgroundDark"
      }`}
    >
      <div className={`container ${style.grid}`}>
        {countries
          .filter((country) => {
            const name = country.name.common;
            const region = country.region;
            let capital;

            if (country.capital) {
              [capital] = country.capital;
            }

            if (filterRegion.includes(region)) {
              return country;
            }
            if (searchTerm === "" && filterRegion === "All") {
              return country;
            } else if (
              searchTerm !== "" &&
              name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return country;
            } else if (
              searchTerm !== "" &&
              country.capital &&
              capital.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return country;
            }

            return 0;
          })
          .map((country, key) => (
            <Link
              key={key}
              to={`/country/${country.cca3}`}
              className="cardLink"
            >
              <Card
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                capital={country.capital}
                region={country.region}
                theme={theme}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Cards;
