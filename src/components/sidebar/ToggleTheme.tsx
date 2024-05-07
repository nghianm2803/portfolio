"use client";

import React, { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ToggleTheme: FC = () => {
  const { setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      setIsDarkTheme(storedTheme === "dark");
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkTheme(!isDarkTheme);

    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Set theme to localStorage error:", error);
    }
  };

  return (
    <label className="theme">
      <input
        className="input"
        checked={isDarkTheme}
        type="checkbox"
        onChange={handleThemeChange}
      />
      <svg
        width="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke="currentColor"
        height="24"
        fill="none"
        className="icon icon-sun"
      >
        <circle r="5" cy="12" cx="12" fill="#f2dd72"></circle>
        <line y2="3" y1="1" x2="12" x1="12" fill="#f2dd72"></line>
        <line y2="23" y1="21" x2="12" x1="12" fill="#f2dd72"></line>
        <line y2="5.64" y1="4.22" x2="5.64" x1="4.22" fill="#f2dd72"></line>
        <line y2="19.78" y1="18.36" x2="19.78" x1="18.36" fill="#f2dd72"></line>
        <line y2="12" y1="12" x2="3" x1="1" fill="#f2dd72"></line>
        <line y2="12" y1="12" x2="23" x1="21" fill="#f2dd72"></line>
        <line y2="18.36" y1="19.78" x2="5.64" x1="4.22" fill="#f2dd72"></line>
        <line y2="4.22" y1="5.64" x2="19.78" x1="18.36" fill="#f2dd72"></line>
      </svg>
      <svg viewBox="0 0 384 512" className="icon icon-moon">
        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
      </svg>
    </label>
  );
};

export default ToggleTheme;
