function WeatherCard({ weather, unit }) {
  if (!weather) return null;

  const tempC = weather.main.temp;

  const temperature =
    unit === "C"
      ? `${Math.round(tempC)} °C`
      : `${Math.round((tempC * 9) / 5 + 32)} °F`;

  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const conditionText = weather.weather[0].main;

  return (
    <>
      {/* Weather Icon UI Section */}
      <div className="weather-icon-section">
        <img
          src={iconUrl}
          alt={conditionText}
          className="weather-icon"
        />
        <p className="weather-condition-text">{conditionText}</p>
      </div>

      {/* Weather Info Grid */}
      <div className="weather-info">
        <div className="weather-item">
          <p className="weather-label">Temperature:</p>
          <p className="weather-value">{temperature}</p>
        </div>

        <div className="weather-item">
          <p className="weather-label">Condition:</p>
          <p className="weather-value">{conditionText}</p>
        </div>

        <div className="weather-item">
          <p className="weather-label">Humidity:</p>
          <p className="weather-value">{weather.main.humidity}%</p>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
