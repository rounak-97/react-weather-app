# React Weather App

This project is a **React Weather Application**

---

## Features
- Search weather by **city name**
- **Input validation** (only letters allowed)
- Error messages shown in **red**
- Toggle temperature unit (**°C / °F**)
- Live weather data using **OpenWeather API**
- Clean and responsive UI

---

## Tech Stack
- React (Vite)
- JavaScript (ES6)
- CSS
- OpenWeather API

---

## Project Structure
```
src/
 ├─ api/
 │   └─ weatherApi.js
 ├─ components/
 │   ├─ SearchBox.jsx
 │   ├─ UnitToggle.jsx
 │   └─ WeatherCard.jsx
 ├─ pages/
 │   └─ WeatherPage.jsx
 ├─ App.jsx
 ├─ App.css
 └─ main.jsx
```

---

## How to Run the Project
```bash
npm install
npm run dev
```

---

## Validation Logic
- Empty input → error shown
- Numbers or symbols in city name → error shown
- Valid city → weather data displayed

---

## Author
**Rounak Kantha**  
