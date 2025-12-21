import { API_CONFIG } from "./config";
import type {
  WeatherData,
  ForecastData,
  GeocodingResponse,
  Coordinates,
} from "./types";

/* ------------------------- helpers ------------------------- */

const createUrl = (
  endpoint: string,
  params: Record<string, string | number>,
) => {
  const searchParams = new URLSearchParams({
    appid: API_CONFIG.API_KEY,
    ...Object.fromEntries(
      Object.entries(params).map(([k, v]) => [k, String(v)]),
    ),
  });

  return `${endpoint}?${searchParams.toString()}`;
};

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather API Error: ${response.statusText}`);
  }

  return response.json();
};

/* ------------------------- API functions ------------------------- */

export const getCurrentWeather = ({
  lat,
  lon,
}: Coordinates): Promise<WeatherData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/weather`, {
    lat,
    lon,
    units: "metric",
  });

  return fetchData<WeatherData>(url);
};

export const getForecast = ({
  lat,
  lon,
}: Coordinates): Promise<ForecastData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
    lat,
    lon,
    units: "metric",
  });

  return fetchData<ForecastData>(url);
};

export const reverseGeocode = ({
  lat,
  lon,
}: Coordinates): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${API_CONFIG.GEO}/reverse`, {
    lat,
    lon,
    limit: 1,
  });

  return fetchData<GeocodingResponse[]>(url);
};

export const searchLocations = (
  query: string,
): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${API_CONFIG.GEO}/direct`, {
    q: query,
    limit: 5,
  });

  return fetchData<GeocodingResponse[]>(url);
};
