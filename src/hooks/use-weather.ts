import type { Coordinates } from "@/api/types";
import { getCurrentWeather, getForecast, reverseGeocode } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEY = {
  weather: (coordinates: Coordinates) => ["weather", coordinates],
  forecast: (coordinates: Coordinates) => ["forecast", coordinates],
  location: (coordinates: Coordinates) => ["location", coordinates],
} as const;

export const useWeatherQuery = (coordinates: Coordinates | null) => {
  return useQuery({
    queryKey: WEATHER_KEY.weather(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => (coordinates ? getCurrentWeather(coordinates) : null),
    enabled: !!coordinates, // disable query if coordinates are null
  });
};

export const useForecastQuery = (coordinates: Coordinates | null) => {
  return useQuery({
    queryKey: WEATHER_KEY.forecast(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => (coordinates ? getForecast(coordinates) : null),
    enabled: !!coordinates, // disable query if coordinates are null
  });
};

export const useReverseGeocodeQuery = (coordinates: Coordinates | null) => {
  return useQuery({
    queryKey: WEATHER_KEY.location(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => (coordinates ? reverseGeocode(coordinates) : null),
    enabled: !!coordinates, // disable query if coordinates are null
  });
};
