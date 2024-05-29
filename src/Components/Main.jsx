import { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

const Main = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
              params: {
                q: city,
                appid: "983923c3fed3590893a7bf30ff519d5c",
                units: "metric",
              },
            }
          );
          setWeather(response.data);
          setError(null);
        } catch (err) {
          setError("Failed to fetch weather data");
          setWeather(null);
        }
      };
      fetchWeather();
    }
  }, [city]);

  return (
    <main className="main">
      {weather ? (
        <div className="weather-info">
          <h2>{`Weather in ${city}`}</h2>
          <p>{`Temperature: ${weather.main.temp} °C`}</p>
          <p>{`Condition: ${weather.weather[0].description}`}</p>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Enter a city to get the weather information.</p>
      )}
    </main>
  );
};

export default Main;
