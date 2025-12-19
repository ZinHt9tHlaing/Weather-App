import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex cursor-pointer items-center transition-transform duration-500 select-none ${
        isDark ? "rotate-180" : "rotate-0"
      }`}
    >
      {isDark ? (
        <Sun className="size-6 rotate-0 text-yellow-500 transition-all" />
      ) : (
        <Moon className="size-6 rotate-0 text-blue-500 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
