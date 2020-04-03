import { useEffect, useState } from "react";

const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(mediaQuery.matches);
  useEffect(() => {
    const fn = event => {
      setIsDarkMode(event.matches);
    };
    mediaQuery.addEventListener("change", fn);
    return () => {
      mediaQuery.removeEventListener("change", fn);
    };
  }, []);
  return isDarkMode;
}
