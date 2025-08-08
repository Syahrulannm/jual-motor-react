import React from "react";
import { useTheme } from "../context/ToggleContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition">
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
