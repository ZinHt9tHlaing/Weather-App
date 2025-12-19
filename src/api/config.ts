import axios from "axios";

export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO_URL: "https://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
};

export const weatherApi = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  params: {
    units: "metric",
    appid: API_CONFIG.API_KEY,
  },
  withCredentials: true,
});

export const geoApi = axios.create({
  baseURL: API_CONFIG.GEO_URL,
  params: {
    appid: API_CONFIG.API_KEY,
  },
  withCredentials: true,
});
