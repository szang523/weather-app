import React, { useState } from "react";
import sunImage from "../../assets/sun.png";

const Search = (props) => {
  const apiKey = "96b7e702087a5e96f30cc8a2e1e36891";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        placeholder="Search city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      <div className="weather-container">
        {typeof weatherData.main === "undefined" ? (
          <div className="container">
            <p>Enter a city to begin</p>
            <img src={sunImage} alt="sun" className="sun" />

            <a href="https://pngtree.com/so/sun">sun png from pngtree.com/</a>
          </div>
        ) : (
          <div>
            <div className="weather-data">
              <p>{weatherData.name}</p>
              <p>{Math.round(weatherData.main.temp)}°F</p>
              <p>{weatherData.weather[0].main}</p>
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
