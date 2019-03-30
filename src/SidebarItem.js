import React, { useState } from "react";
import PT from "prop-types";
import C from "classnames";

import ThemeType from "./prop-types/theme";

const OFFLINE = "\u25CB";
const ONLINE = "\u25CF";
const WIDTH = "220px";

function SidebarItem({ theme, index, name, type }) {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };
  function renderPerson(person, i) {
    const { hoverColor } = theme;
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
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {icon} {person}
      </div>
    );
  }
  function renderChannel(channel, i) {
    const className = C("pointer", "pv1 ph3", "flex");
    const { activeColor, hoverColor, activeTextColor, badgeColor } = theme;
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
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex-auto">{channelElem}</div>
        {i % 6 === 0 ? badge : null}
      </div>
    );
  }
  if (type === "person") {
    return renderPerson(name, index);
  } else if (type === "channel") {
    return renderChannel(name, index);
  } else {
    throw new Error();
  }
}

SidebarItem.displayName = "SidebarItem";

SidebarItem.propTypes = {
  index: PT.number.isRequired,
  name: PT.string.isRequired,
  type: PT.oneOf(["person", "channel"]).isRequired,
  theme: ThemeType.isRequired
};

export default SidebarItem;
