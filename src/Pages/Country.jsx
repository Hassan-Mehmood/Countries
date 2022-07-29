import React, { useState, useEffect } from "react";
import style from "./country.module.css";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

function Country({ theme, setTheme }) {
  let [countryData, setCountryData] = useState([]);
  const { name } = useParams();

  let countryName;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subRegion;
  let capital;
  let topLvlDomain;
  let currencies;
  let languages;
  let borderCountries = [];
  const fetchCountryData = async () => {
    let response = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
    let data = await response.json();

    setCountryData(() => (countryData = data));
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  useEffect(() => {
    fetchCountryData();
  }, [name]);

  return (
    <div
      className={`${style.countryPage} ${
        theme === "light" ? "" : "backgroundDark"
      } `}
    >
      {countryData.map((country, key) => {
        countryName = country.name.common;
        flagImg = country.flags.png;
        nativeName = country.name.official;
        population = country.population;
        region = country.region;
        subRegion = country.subregion;
        capital = country.capital;
        topLvlDomain = country.cca2;

        currencies = country.currencies;
        languages = country.languages;

        country.borders?.forEach((border) => {
          borderCountries.push(border);
        });

        return (
          <div key={key} className={`container ${style.countryContaier}`}>
            <button className={`${style.btn} `}>
              <Link
                to={"/"}
                className={`${style.backBtn} ${
                  theme === "light" ? "elementLight" : "elementDark"
                }`}
              >
                <BiArrowBack /> <span>Back</span>
              </Link>
            </button>
            <div className={`${style.grid}`}>
              <div>
                <img src={flagImg} alt={countryName} />
              </div>
              <div className={`${style.countryInfo}`}>
                <h1>{countryName}</h1>
                <p>
                  <span>Native Name:</span> {nativeName}
                </p>
                <p>
                  <span>Population:</span> {population}
                </p>
                <p>
                  <span>Region:</span> {region}
                </p>
                <p>
                  <span>Sub region:</span> {subRegion}
                </p>
                <p>
                  <span>Capital:</span> {capital}
                </p>
              </div>
              <div className={style.thirdColumn}>
                <p>
                  <span>Top Level Domain:</span> {topLvlDomain}
                </p>
                <p>
                  <span>Currencies: </span>

                  {currencies !== undefined
                    ? Object.keys(currencies).map((key) => {
                        return `${currencies[key].name}, `;
                      })
                    : ""}
                </p>
                <p>
                  <span>Languages: </span>
                  {currencies !== undefined
                    ? Object.keys(languages).map((key) => {
                        return `${languages[key]}, `;
                      })
                    : ""}
                </p>
              </div>
            </div>
            <div className={style.borders}>
              <p>
                Border Countries:
                {borderCountries.length >= 1
                  ? borderCountries.map((border, key) => {
                      return (
                        <Link key={key} to={`/country/${border}`}>
                          <span
                            className={` ${
                              theme === "light" ? "elementLight" : "elementDark"
                            }`}
                          >
                            {border}
                          </span>
                        </Link>
                      );
                    })
                  : " No Border Countries"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Country;
