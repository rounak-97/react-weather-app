import { useState } from "react";
import SearchBox from "../components/SearchBox";
import WeatherCard from "../components/WeatherCard";
import UnitToggle from "../components/UnitToggle";
import { fetchWeatherByCity } from "../api/weatherApi";

function WeatherPage() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("C"); // C or F
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const trimmedCity = city.trim();
    const cityRegex = /^[a-zA-Z\s]+$/;

    // Empty input
    if (!trimmedCity) {
      setError("Please enter a city name");
      setWeather(null); 
      return;
    }

    // Invalid characters
    if (!cityRegex.test(trimmedCity)) {
      setError("City name must contain only letters");
      setWeather(null); 
      return;
    }

    try {
      setError("");
      setLoading(true);

      const data = await fetchWeatherByCity(trimmedCity, "metric");
      setWeather(data);

    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <SearchBox
        city={city}
        onCityChange={setCity}
        onSearch={handleSearch}
      />

      <UnitToggle unit={unit} setUnit={setUnit} />

      {loading && <p>Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      <WeatherCard weather={weather} unit={unit} />
    </div>
  );
}

export default WeatherPage;
