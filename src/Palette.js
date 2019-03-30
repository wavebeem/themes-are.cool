import React from "react";
import PT from "prop-types";
import MC from "material-colors";
import C from "classnames";

const weights = ["100", "200", "700", "800"];
const colors = [
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
  "grey"
]
  .map(c => weights.map(w => MC[c][w]))
  .reduce((a, b) => [...a, ...b], []);

function Palette({ updatePrimaryColor, themeType }) {
  const className = "ml3 br1 ba b--black-20";
  const style = {
    lineHeight: "0",
    maxWidth: "300px"
  };
  return (
    <div className={className} style={style}>
      {colors.map((c, i) => {
        return (
          <div key={i} className="dib w-25">
            <button
              onClick={() => {
                updatePrimaryColor(c);
              }}
              style={{
                height: "30px",
                background: c
              }}
              className={C(
                themeType === "dark" ? "white" : "black",
                "bn br0",
                "code ttl",
                "w-100 border-box",
                "pointer",
                "inner-focus"
              )}
            />
          </div>
        );
      })}
    </div>
  );
}

Palette.displayName = "Palette";

Palette.propTypes = {
  updatePrimaryColor: PT.func.isRequired,
  themeType: PT.string.isRequired
};

export default Palette;
