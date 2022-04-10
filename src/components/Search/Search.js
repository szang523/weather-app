import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        className="input"
        placeholder="Search city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Enter a city to begin</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}°F</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
