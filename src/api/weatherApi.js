const API_KEY = "5f236364a6206a79c9292cdcc8fc68ad";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherByCity(city, unit) {
  const cleanCity = encodeURIComponent(city.trim());

  const response = await fetch(
    `${BASE_URL}?q=${cleanCity}&units=${unit}&appid=${API_KEY}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}
