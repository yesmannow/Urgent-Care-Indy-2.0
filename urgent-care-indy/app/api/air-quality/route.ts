import { NextResponse } from "next/server";

function getCategory(aqi: number): string {
  if (aqi > 100) return "Unhealthy";
  if (aqi >= 50) return "Moderate";
  return "Good";
}

export async function GET() {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Random AQI between 30 and 160 to test different alert states
  const aqi = Math.floor(Math.random() * (160 - 30 + 1)) + 30;
  const category = getCategory(aqi);

  return NextResponse.json({ aqi, category });
}
