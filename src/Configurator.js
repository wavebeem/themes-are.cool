import React from "react";
import PT from "prop-types";
import { ChromePicker } from "react-color";

import ThemeType from "./prop-types/theme";
import Footer from "./Footer";
import Palette from "./Palette";

function Configurator({
  theme,
  updateBadgeType,
  updatePrimaryColor,
  updateThemeType
}) {
  function onChangeBadgeType(event) {
    updateBadgeType(event.target.value);
  }
  function onChangeThemeType(event) {
    updateThemeType(event.target.value);
  }
  function onColorPickerChange({ hex }) {
    updatePrimaryColor(hex);
  }
  const {
    primaryColor,
    foregroundColor,
    badgeType,
    themeType,
    hoverColor,
    activeColor,
    activeTextColor,
    badgeColor
  } = theme;
  const slackTheme = [
    primaryColor, // Column BG
    hoverColor, // Menu BG Hover
    activeColor, // Active Item
    activeTextColor, // Active Item Text
    hoverColor, // Hover Item
    foregroundColor, // Text Color
    foregroundColor, // Active Presence
    badgeColor // Mention Badge
  ].join(",");
  const selectAll = event => {
    event.target.focus();
    event.target.select();
  };
  const radioClass = "ph2 pv0 br2 db lh-copy hover-bg-light-gray";
  const elemHeader = (
    <header className="bb b--light-gray pv2 ph3 mb3">
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
          bg-white
          glow
          b--black-20
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
      <h2 className="b ttu f6 mv1">Text color</h2>
      <label className={radioClass}>
        <input
          type="radio"
          name="theme-type"
          value="dark"
          checked={themeType === "dark"}
          onChange={onChangeThemeType}
        />
        <span className="ml2">Light text</span>
      </label>
      <label className={radioClass}>
        <input
          type="radio"
          name="theme-type"
          value="light"
          checked={themeType === "light"}
          onChange={onChangeThemeType}
        />
        <span className="ml2">Dark text</span>
      </label>
    </div>
  );
  const elemRadioButtonsBadge = (
    <div className="db ph3 mb3">
      <h2 className="db b ttu f6 mv1">Badge color</h2>
      <label className={radioClass}>
        <input
          type="radio"
          name="badge-type"
          value="red"
          checked={badgeType === "red"}
          onChange={onChangeBadgeType}
        />
        <span className="ml2">Red badges</span>
      </label>
      <label className={radioClass}>
        <input
          type="radio"
          name="badge-type"
          value="themed"
          checked={badgeType === "themed"}
          onChange={onChangeBadgeType}
        />
        <span className="ml2">Dark badges</span>
      </label>
    </div>
  );
  const elemPalette = (
    <Palette themeType={themeType} updatePrimaryColor={updatePrimaryColor} />
  );
  return (
    <div className="flex-auto mw8">
      {elemHeader}
      <div className="flex">
        <div>{elemPalette}</div>
        <div className="flex-auto">
          {elemPrimaryColor}
          <div className="flex-l">
            {elemRadioButtonsText}
            {elemRadioButtonsBadge}
          </div>
          {elemTheme}
          <p>
            <a
              href="https://www.themes-are.cool"
              className="mh3 pv1 ph2 no-underline br2 bg-dark-red white"
            >
              Switch to modern layout
            </a>
          </p>
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
