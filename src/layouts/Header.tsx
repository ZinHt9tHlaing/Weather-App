import { Link } from "react-router";

import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b py-2 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/nav.png" : "/nav2.png"}
            alt="Weather logo"
            loading="lazy"
            decoding="async"
            className="animate-fade-in h-14 opacity-0 transition-opacity duration-300 ease-in-out"
          />
          <span className="sr-only">Weather logo</span>
        </Link>

        <div className=""></div>

        <div className="flex gap-4">
          {/* <CitySearch /> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
