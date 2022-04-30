import PT from "prop-types";
import * as React from "react";
import { ChromePicker } from "react-color";
import Palette from "./Palette";

function Configurator({
  theme,
  themeType,
  primaryColor,
  updatePrimaryColor,
  updateThemeType,
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
    topNavText,
  } = theme;
  const slackTheme = [
    columnBG,
    // Per a support request with Slack, the 2nd item in the theme array is no
    // longer used. It used to represent the color of the area in the sidebar
    // that says the name of the workspace you're in. The support person said
    // for the near future, Slack themes will continue to be 10 colors with only
    // 9 used, just to avoid breaking themes too much.
    //
    // https://twitter.com/wavebeem/status/1243741888944857088
    columnBG,
    activeItem,
    activeItemText,
    hoverItem,
    textColor,
    activePresence,
    mentionBadge,
    topNavBG,
    topNavText,
  ].join(",");
  const selectAll = (event) => {
    event.target.focus();
    event.target.select();
  };
  const radioClass = "ph2 pv1 br2 db lh-copy";
  return (
    <div className="flex-auto min-h-100">
      <header className="ph3 bb b--cool pv2">
        <h1 className="db mt0 mb1 f5">#legal-notice</h1>
        <h2 className="db ma0 f5 normal">
          <span className="o-80">
            This product is not endorsed by, affiliated with, or supported by
            Slack Technologies, Inc.
          </span>{" "}
          <span role="img" aria-label="judge emoji">
            👨‍⚖️
          </span>
        </h2>
      </header>
      <div className="cool-grid flex-auto">
        <Palette
          themeType={themeType}
          updatePrimaryColor={updatePrimaryColor}
        />
        <div>
          <ChromePicker
            color={primaryColor}
            disableAlpha={true}
            onChange={onColorPickerChange}
          />
          <div className="db pv3">
            <h2 className="b f5 mv1">Appearance</h2>
            <label className={radioClass}>
              <input
                className="br-pill"
                type="radio"
                name="theme-type"
                value="light"
                checked={themeType === "light"}
                onChange={onChangeThemeType}
              />
              <span className="ml2 br2 ph1 dib ba b--black-10 bg-near-white dark-gray">
                Light
              </span>
            </label>
            <label className={radioClass}>
              <input
                className="br-pill"
                type="radio"
                name="theme-type"
                value="dark"
                checked={themeType === "dark"}
                onChange={onChangeThemeType}
              />
              <span className="ml2 br2 ph1 dib ba b--white-30 bg-near-black light-gray">
                Dark
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-column">
          <label className="db">
            <h2 className="b f5 mt0 mb1">Theme</h2>
            <textarea
              readOnly
              onFocus={selectAll}
              value={slackTheme}
              rows={4}
              spellCheck={false}
              className="border-box w-100 cool-textarea bw1 ba br2 pa2 code"
            />
          </label>
          <div className="pt2">
            <button
              className="active-squish cool-button bn br1 pv2 ph3 f5 b"
              onClick={() => {
                navigator.clipboard.writeText(slackTheme);
              }}
            >
              Copy
            </button>
          </div>
          <div className="flex-auto">
            <ul className="lh-copy pl3">
              <li>Copy the theme above.</li>
              <li>Send it as a message.</li>
              <li>
                Click <b>Switch sidebar theme</b>.
              </li>
            </ul>
            <p>Tip: Direct message yourself to store your favorite themes.</p>
            <footer>
              &copy; {new Date().getFullYear() + " "}
              <a
                className="color-inherit b br2"
                href="https://www.wavebeem.com"
              >
                Brian Mock
              </a>{" "}
              <span aria-hidden="true">🤓</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

Configurator.displayName = "Configurator";

Configurator.propTypes = {
  theme: PT.object.isRequired,
  updatePrimaryColor: PT.func.isRequired,
  updateThemeType: PT.func.isRequired,
};

export default Configurator;
