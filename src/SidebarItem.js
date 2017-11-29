import React, { Component, PropTypes as PT } from "react";
import C from "classnames";
import ThemeType from "./prop-types/theme";

const OFFLINE = "\u25CB";
const ONLINE = "\u25CF";
const WIDTH = "220px";

class SidebarItem extends Component {
  constructor() {
    super();
    this.state = { isHovered: false };
    this.onMouseEnter = () => {
      this.setState({ isHovered: true });
    };
    this.onMouseLeave = () => {
      this.setState({ isHovered: false });
    };
  }
  renderPerson(person, i) {
    const { isHovered } = this.state;
    const { hoverColor } = this.props.theme;
    const isOnline = i % 5 <= 2;
    const icon = isOnline ? ONLINE : OFFLINE;
    const className = C("pointer", "br2 br--right", "pv1 ph3", "o-70");
    const style = {
      background: isHovered ? hoverColor : null,
      width: WIDTH
    };
    return (
      <div
        style={style}
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {icon} {person}
      </div>
    );
  }
  renderChannel(channel, i) {
    const { isHovered } = this.state;
    const className = C("pointer", "pv1 ph3", "flex");
    const {
      activeColor,
      hoverColor,
      activeTextColor,
      badgeColor
    } = this.props.theme;
    const style = {
      background: i === 3 ? activeColor : isHovered ? hoverColor : null,
      color: i === 3 ? activeTextColor : null,
      opacity: i === 3 || i % 4 === 0 || i % 6 === 0 ? null : "0.7",
      width: WIDTH
    };
    const badge = (
      <div
        style={{
          minWidth: "25px",
          background: badgeColor
        }}
        className="normal tc br-pill white mr1 f6"
      >
        3
      </div>
    );
    const channelElem =
      i % 4 === 0 || i % 6 === 0 ? (
        <b className="fw6"># {channel}</b>
      ) : (
        `# ${channel}`
      );
    return (
      <div
        style={style}
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="flex-auto">{channelElem}</div>
        {i % 6 === 0 ? badge : null}
      </div>
    );
  }
  render() {
    const { index, name, type } = this.props;
    if (type === "person") {
      return this.renderPerson(name, index);
    } else if (type === "channel") {
      return this.renderChannel(name, index);
    } else {
      throw new Error();
    }
  }
}

SidebarItem.propTypes = {
  index: PT.number.isRequired,
  name: PT.string.isRequired,
  type: PT.oneOf(["person", "channel"]).isRequired,
  theme: ThemeType.isRequired
};

export default SidebarItem;
