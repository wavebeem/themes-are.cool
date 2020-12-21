import C from "classnames";
import MC from "material-colors";
import PT from "prop-types";
import React from "react";

const weights = ["100", "200", "700", "800"];
const groupedColors = [
  "red",
  "pink",
  "purple",
  "deepPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deepOrange",
  "brown",
  "blueGrey",
  "grey",
].map((c) => weights.map((w) => MC[c][w]));
const colors = groupedColors.reduce((a, b) => [...a, ...b], []);

function Palette({ updatePrimaryColor, themeType }) {
  return (
    <div className="cool-palette">
      {colors.map((c, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              updatePrimaryColor(c);
            }}
            style={{
              background: c,
            }}
            className={C(
              themeType === "dark" ? "white" : "black",
              "bn br0",
              "code ttl",
              "w-100 h1 border-box",
              "cool-palette-item"
            )}
          />
        );
      })}
    </div>
  );
}

Palette.displayName = "Palette";

Palette.propTypes = {
  updatePrimaryColor: PT.func.isRequired,
  themeType: PT.string.isRequired,
};

export default Palette;
