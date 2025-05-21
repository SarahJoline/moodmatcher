import { CityResult } from "../types";

export async function fetchWeatherByCity(city: CityResult) {
    const res = await fetch("/api/weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lat: city.lat, log: city.lon }),
    });
  
    const data = await res.json();
    return data.weather;
  }