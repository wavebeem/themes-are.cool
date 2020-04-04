import { useEffect, useState } from "react";

const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(mediaQuery.matches);
  useEffect(() => {
    const fn = event => {
      setIsDarkMode(event.matches);
    };
    // 2020-04-03
    // Safari still doesn't support addEventListener("change", fn) for this API.
    mediaQuery.addListener(fn);
    return () => {
      mediaQuery.removeListener(fn);
    };
  }, []);
  return isDarkMode;
}
