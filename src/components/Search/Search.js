import React, { useState } from "react";

const Search = (props) => {
  const apiKey = "96b7e702087a5e96f30cc8a2e1e36891";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&units=imperial&appid={API key}"
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
    }
  };

  return (
    <div>
      <input type="text" className="input" placeholder="Search city" />
    </div>
  );
};

export default Search;
