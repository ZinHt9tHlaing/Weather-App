import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import WeatherDashboard from "./pages/weather-dashboard";
import CityPage from "./pages/city-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: WeatherDashboard,
      },
      {
        path: "/city/:cityName",
        Component: CityPage,
      },
    ],
  },
]);
