import sunImage from "../../assets/sun.png";

const Weather = ({ main, name, temp, weather, icon }) => {
  return (
    <div className="weather-container">
      {typeof main === "undefined" ? (
        <div className="container">
          <p>Please enter city</p>
          <img src={sunImage} alt="sun" className="sun" />
          <a href="https://pngtree.com/so/sun">sun png from pngtree.com/</a>
        </div>
      ) : (
        <div>
          <div className="weather-data">
            <p>{name}</p>
            <p>{Math.round(temp)}°F</p>
            <p>{weather}</p>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
