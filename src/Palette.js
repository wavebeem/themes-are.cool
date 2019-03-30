import React, { Component } from "react";
import PT from "prop-types";
import MC from "material-colors";
import C from "classnames";

class Palette extends Component {
  colors() {
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
    ];
    return colors
      .map(c => weights.map(w => MC[c][w]))
      .reduce((a, b) => [...a, ...b], []);
  }
  buttons() {
    const { onChangePrimaryColor, themeType } = this.props;
    return this.colors().map((c, i) => {
      const f = () => {
        onChangePrimaryColor({ target: { value: c } });
      };
      const className = C(
        themeType === "dark" ? "white" : "black",
        "bn br0",
        "code ttl",
        "w-100 border-box",
        "pointer",
        "inner-focus"
      );
      const style = {
        height: "30px",
        background: c
      };
      const button = <button onClick={f} style={style} className={className} />;
      return (
        <div key={i} className="dib w-25">
          {button}
        </div>
      );
    });
  }
  render() {
    const className = "ml3 br1 ba b--black-20";
    const style = {
      lineHeight: "0",
      maxWidth: "300px"
    };
    return (
      <div className={className} style={style}>
        {this.buttons()}
      </div>
    );
  }
}

Palette.displayName = "Palette";

Palette.propTypes = {
  onChangePrimaryColor: PT.func.isRequired,
  themeType: PT.string.isRequired
};

export default Palette;
