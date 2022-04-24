import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
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
      <h1> Weather App </h1>
      <Search
        onChangeFunction={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      ></Search>
      <Weather
        main={weatherData?.main}
        name={weatherData?.name}
        temp={weatherData?.main?.temp}
        weather={weatherData?.weather?.[0]?.weather}
        icon={weatherData?.weather?.[0]?.icon}
      />
    </div>
  );
}

export default App;
