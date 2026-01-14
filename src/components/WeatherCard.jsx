function WeatherCard({ weather, unit }) {
  if (!weather) return null;

  const tempC = weather.main.temp;

  const temperature =
    unit === "C"
      ? `${Math.round(tempC)} °C`
      : `${Math.round((tempC * 9) / 5 + 32)} °F`;

  return (
    <div className="weather-info">
      <div className="weather-item">
        <p className="weather-label">Temperature:</p>
        <p className="weather-value">{temperature}</p>
      </div>
      <div className="weather-item">
        <p className="weather-label">Condition:</p>
        <p className="weather-value">{weather.weather[0].main}</p>
      </div>
      <div className="weather-item">
        <p className="weather-label">Humidity:</p>
        <p className="weather-value">{weather.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
