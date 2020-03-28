import React, { useState } from "react";
import TinyColor from "tinycolor2";

import Configurator from "./Configurator";
import Sidebar from "./Sidebar";
import { SearchBar } from "./SearchBar";

function darken(color, amount) {
  return TinyColor(color)
    .darken(amount)
    .toHexString();
}

function lighten(color, amount) {
  const color2 = TinyColor(color).lighten(amount);
  return TinyColor.mix(color2, "white", amount).toHexString();
}

function colorLightDark(color, light, dark) {
  // 1 means both colors are identical. 21 means maximum contrast.
  const contrast = TinyColor.readability(color, light);
  return contrast >= 3 ? light : dark;
}

function App() {
  const [primaryColor, setPrimaryColor] = useState("#3f0e40");
  const [themeType, setThemeType] = useState("light");
  const bg = themeType === "dark" ? "#1a1d21" : "#ffffff";
  const fg = themeType === "dark" ? "#ffffff" : "#000000";
  const border =
    themeType === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const columnBG = bg;
  const activeItem = primaryColor;
  const activeItemText = colorLightDark(primaryColor, "#ffffff", "#000000");
  const hoverItem = lighten(columnBG, -10);
  const textColor = fg;
  const activePresence = textColor;
  const mentionBadge = "#cd2553";
  const topNavBG = primaryColor;
  const topNavText = activeItemText;
  const theme = {
    themeType,
    bg,
    fg,
    border,
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
  const style = document.documentElement.style;
  style.setProperty("--cool-bg", bg);
  style.setProperty("--cool-fg", fg);
  style.setProperty("--cool-border", border);
  style.setProperty("--cool-column-bg", columnBG);
  style.setProperty("--cool-active-item", activeItem);
  style.setProperty("--cool-active-item-text", activeItemText);
  style.setProperty("--cool-hover-item", hoverItem);
  style.setProperty("--cool-text-color", textColor);
  style.setProperty("--cool-active-presence", activePresence);
  style.setProperty("--cool-mention-badge", mentionBadge);
  style.setProperty("--cool-top-nav-bg", topNavBG);
  style.setProperty("--cool-top-nav-text", topNavText);
  return (
    <div
      className="sans-serif flex flex-column flex-auto min-vh-100"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        width: "100vw"
      }}
    >
      <SearchBar theme={theme} />
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
