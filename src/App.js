import React, { useState } from "react";
import TinyColor from "tinycolor2";

import Configurator from "./Configurator";
import Sidebar from "./Sidebar";

function darken(color, amount) {
  return TinyColor(color)
    .darken(amount)
    .toHexString();
}

function lighten(color, amount) {
  const color2 = TinyColor(color).lighten(amount);
  return TinyColor.mix(color2, "white", amount).toHexString();
}

function preferredThemeTypeFor(color) {
  // 1 means both colors are identical. 21 means maximum contrast.
  const contrast = TinyColor.readability(color, "white");
  return contrast < 3 ? "light" : "dark";
}

function App() {
  const [badgeType, setBadgeType] = useState("red");
  const [primaryColor, setPrimaryColor] = useState("#3f0e40");
  const [themeType, setThemeType] = useState("dark");
  const darkerColor = darken(primaryColor, 10);
  const darkestColor = darken(primaryColor, 50);
  const lighterColor = lighten(primaryColor, 5);
  const lightestColor = lighten(primaryColor, 10);
  const foregroundColor = themeType === "dark" ? "#ffffff" : "#000000";
  const badgeColor = badgeType === "red" ? "#cd2553" : darkerColor;
  const hoverColor = themeType === "dark" ? lighterColor : darkerColor;
  const activeColor = themeType === "dark" ? lightestColor : darkestColor;
  const activeTextColor = "#ffffff";
  const updatePrimaryColor = color => {
    setPrimaryColor(TinyColor(color).toHexString());
    setThemeType(preferredThemeTypeFor(color));
  };
  const theme = {
    badgeType,
    primaryColor,
    themeType,
    darkerColor,
    darkestColor,
    lighterColor,
    lightestColor,
    activeTextColor,
    activeColor,
    hoverColor,
    badgeColor,
    foregroundColor
  };
  return (
    <div className="sans-serif flex flex-auto min-vh-100">
      <Sidebar theme={theme} />
      <Configurator
        theme={theme}
        updateBadgeType={setBadgeType}
        updatePrimaryColor={updatePrimaryColor}
        updateThemeType={setThemeType}
      />
    </div>
  );
}

App.displayName = "App";

export default App;
