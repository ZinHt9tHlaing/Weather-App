import { API_CONFIG, geoApi, weatherApi } from "./config";
import type {
  Coordinates,
  ForecastData,
  GeocodingResponse,
  WeatherData,
} from "./types";

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
  const response = await weatherApi.get<T>(url);

  if (response.status !== 200) {
    throw new Error(`Weather API Error: ${response.statusText}`);
  }

  return response.data;
};

export const getCurrentWeather = async ({
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

export const getForecast = async ({
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

export const reverseGeocode = async ({
  lat,
  lon,
}: Coordinates): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${geoApi}/reverse`, {
    lat,
    lon,
    limit: 1,
  });

  return fetchData<GeocodingResponse[]>(url);
};

export const searchLocations = async (
  query: string,
): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${geoApi}/direct`, {
    q: query,
    limit: 5,
  });

  return fetchData<GeocodingResponse[]>(url);
};
