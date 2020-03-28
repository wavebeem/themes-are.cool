import React from "react";
import PT from "prop-types";
import { ChromePicker } from "react-color";

import ThemeType from "./prop-types/theme";
import Footer from "./Footer";
import Palette from "./Palette";

function Configurator({
  theme,
  themeType,
  primaryColor,
  updatePrimaryColor,
  updateThemeType
}) {
  function onChangeThemeType(event) {
    updateThemeType(event.target.value);
  }
  function onColorPickerChange({ hex }) {
    updatePrimaryColor(hex);
  }
  const {
    columnBG,
    activeItem,
    activeItemText,
    hoverItem,
    textColor,
    activePresence,
    mentionBadge,
    topNavBG,
    topNavText
  } = theme;
  const slackTheme = [
    columnBG,
    "#ff00ff",
    activeItem,
    activeItemText,
    hoverItem,
    textColor,
    activePresence,
    mentionBadge,
    topNavBG,
    topNavText
  ].join(",");
  const selectAll = event => {
    event.target.focus();
    event.target.select();
  };
  const radioClass = "ph2 pv0 br2 db lh-copy";
  const elemHeader = (
    <header className="bb b--cool pv2 ph3 mb3">
      <h1 className="db mt0 mb1 f5">#themes-are-cool</h1>
      <h2 className="db gray ma0 f6 normal">
        Color code your workspaces!{" "}
        <span role="img" aria-label="peace out emoji">
          ✌️
        </span>
      </h2>
    </header>
  );
  const elemPrimaryColor = (
    <label className="db ph3">
      <h2 className="b ttu f6 mt0 mb1">Color</h2>
      <div className="mb3">
        <ChromePicker
          color={primaryColor}
          disableAlpha={true}
          onChange={onColorPickerChange}
        />
      </div>
    </label>
  );
  const elemTheme = (
    <label className="db ph3">
      <h2 className="b ttu f6 mt0 mb1">
        Send this to any chat room, then click the <q>Switch sidebar theme</q>{" "}
        button
      </h2>
      <textarea
        onFocus={selectAll}
        onChange={() => {}}
        value={slackTheme}
        rows={2}
        spellCheck={false}
        className={`
          border-box w-100
          cool-textarea
          bw1
          ba br2
          pa2
          code
        `}
      />
    </label>
  );
  const elemRadioButtonsText = (
    <div className="db ph3 mb3">
      <h2 className="b ttu f6 mv1">Theme type</h2>
      <label className={radioClass}>
        <input
          type="radio"
          name="theme-type"
          value="dark"
          checked={themeType === "dark"}
          onChange={onChangeThemeType}
        />
        <span className="ml2">Dark theme</span>
      </label>
      <label className={radioClass}>
        <input
          type="radio"
          name="theme-type"
          value="light"
          checked={themeType === "light"}
          onChange={onChangeThemeType}
        />
        <span className="ml2">Light theme</span>
      </label>
    </div>
  );
  const elemPalette = (
    <Palette themeType={themeType} updatePrimaryColor={updatePrimaryColor} />
  );
  return (
    <div className="flex-auto">
      {elemHeader}
      <div className="flex">
        <div>{elemPalette}</div>
        <div className="flex-auto">
          {elemPrimaryColor}
          <div className="flex-l">{elemRadioButtonsText}</div>
          {elemTheme}
          <Footer />
        </div>
      </div>
    </div>
  );
}

Configurator.displayName = "Configurator";

Configurator.propTypes = {
  theme: ThemeType.isRequired,
  updateBadgeType: PT.func.isRequired,
  updatePrimaryColor: PT.func.isRequired,
  updateThemeType: PT.func.isRequired
};

export default Configurator;
