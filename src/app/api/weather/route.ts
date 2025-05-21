
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { lat, lon } = await request.json();

  const apiKey = process.env.WEATHER_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`
  );

  const data = await res.json();

  if (!res.ok) {
    console.error(data);
    return new Response("Failed to fetch weather", { status: 500 });
  }

  return Response.json({ weather: data });
}