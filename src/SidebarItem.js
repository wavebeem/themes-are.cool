import React from "react";
import PT from "prop-types";
import C from "classnames";

const OFFLINE = "\u25CB";
const ONLINE = "\u25CF";
const WIDTH = "220px";

function SidebarItem({ index, name, type }) {
  function renderPerson(person) {
    const isOnline = index % 5 <= 2;
    const icon = isOnline ? ONLINE : OFFLINE;
    const className = C("pv1 ph3", "o-70", "cool-sidebar-item");
    const style = {
      width: WIDTH
    };
    return (
      <div
        style={style}
        className={className}
        data-active={index === 3 ? "yes" : undefined}
      >
        {icon} {person}
      </div>
    );
  }
  function renderChannel(channel) {
    const className = C("pv1 ph3", "flex", "cool-sidebar-item");
    const style = {
      opacity: index === 3 || index % 4 === 0 || index % 6 === 0 ? null : "0.7",
      width: WIDTH
    };
    const badge = (
      <div
        style={{ minWidth: "25px" }}
        className="normal tc br-pill white mr1 f6 cool-badge"
      >
        3
      </div>
    );
    const channelElem =
      index % 4 === 0 || index % 6 === 0 ? (
        <b className="fw6"># {channel}</b>
      ) : (
        `# ${channel}`
      );
    return (
      <div
        style={style}
        className={className}
        data-active={index === 3 ? "yes" : undefined}
      >
        <div className="flex-auto">{channelElem}</div>
        {index % 6 === 0 ? badge : null}
      </div>
    );
  }
  if (type === "person") {
    return renderPerson(name);
  } else if (type === "channel") {
    return renderChannel(name);
  } else {
    throw new Error();
  }
}

SidebarItem.displayName = "SidebarItem";

SidebarItem.propTypes = {
  index: PT.number.isRequired,
  name: PT.string.isRequired,
  type: PT.oneOf(["person", "channel"]).isRequired,
  theme: PT.object.isRequired
};

export default SidebarItem;
