import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

import Configurator from "./Configurator";
import Sidebar from "./Sidebar";
import { useDarkMode } from "./useDarkMode";

function lighten(color, amount) {
  const color2 = tinycolor(color).lighten(amount);
  return tinycolor.mix(color2, "white", amount).toHexString();
}

Object.assign(window, { tinycolor });

function withLightness(color, l) {
  const { h, s } = tinycolor(color).toHsl();
  return tinycolor({ h, s, l }).toHexString();
}

function colorLightDark(color, light, dark) {
  // 1 means both colors are identical. 21 means maximum contrast.
  const contrast = tinycolor.readability(color, light);
  return contrast >= 3 ? light : dark;
}

function App() {
  const [primaryColor, setPrimaryColor] = useState("#1565c0");
  const isDarkMode = useDarkMode();
  useEffect(() => {
    setThemeType(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  const [themeType, setThemeType] = useState(isDarkMode ? "dark" : "light");
  const bg = themeType === "dark" ? "#1a1d21" : "#ffffff";
  const fg = themeType === "dark" ? "#d1d2d3" : "#1d1c1d";
  const border =
    themeType === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const columnBG =
    themeType === "dark"
      ? withLightness(primaryColor, 15)
      : withLightness(primaryColor, 95);
  const activeItem = primaryColor;
  const activeItemText = colorLightDark(primaryColor, "#ffffff", "#000000");
  const hoverItem = lighten(columnBG, themeType === "dark" ? 6 : -8);
  const textColor = fg;
  const activePresence = textColor;
  const mentionBadge = "#cd2553";
  const topNavBG = primaryColor;
  const topNavText = activeItemText;
  const searchBorder = colorLightDark(
    primaryColor,
    "rgba(255, 255, 255, 0.2)",
    "rgba(0, 0, 0, 0.2)"
  );
  const searchBG = colorLightDark(
    primaryColor,
    "rgba(255, 255, 255, 0.1)",
    "rgba(0, 0, 0, 0.05)"
  );
  const theme = {
    themeType,
    bg,
    fg,
    border,
    searchBorder,
    searchBG,
    columnBG,
    activeItem,
    activeItemText,
    hoverItem,
    textColor,
    activePresence,
    mentionBadge,
    topNavBG,
    topNavText
  };
  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty("--cool-bg", bg);
    style.setProperty("--cool-fg", fg);
    style.setProperty("--cool-border", border);
    style.setProperty("--cool-search-border", searchBorder);
    style.setProperty("--cool-search-bg", searchBG);
    style.setProperty("--cool-column-bg", columnBG);
    style.setProperty("--cool-active-item", activeItem);
    style.setProperty("--cool-active-item-text", activeItemText);
    style.setProperty("--cool-hover-item", hoverItem);
    style.setProperty("--cool-text-color", textColor);
    style.setProperty("--cool-active-presence", activePresence);
    style.setProperty("--cool-mention-badge", mentionBadge);
    style.setProperty("--cool-top-nav-bg", topNavBG);
    style.setProperty("--cool-top-nav-text", topNavText);
  });
  return (
    <div className="sans-serif flex flex-column flex-auto min-vh-100">
      <div
        className="pa2 tc bb b--cool cool-top-nav flex items-center"
        style={{ cursor: "default", userSelect: "none" }}
      >
        <div class="flex-auto" />
        <div class="ph2">&larr;</div>
        <div class="ph2 o-50">&rarr;</div>
        <div class="ph2" />
        <div class="pa1 br3 cool-search" style={{ width: 400 }}>
          Themes Are Cool
        </div>
        <div class="ph2" />
        <div class="ph2 o-0">&larr;</div>
        <div class="ph2 o-0">&rarr;</div>
        <div class="flex-auto" />
      </div>
      <div className="flex flex-auto">
        <Sidebar theme={theme} />
        <Configurator
          theme={theme}
          themeType={themeType}
          primaryColor={primaryColor}
          updatePrimaryColor={setPrimaryColor}
          updateThemeType={setThemeType}
        />
      </div>
    </div>
  );
}

App.displayName = "App";

export default App;
