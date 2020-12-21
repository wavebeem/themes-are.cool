import C from "classnames";
import PT from "prop-types";
import * as React from "react";

const WIDTH = "220px";

function SidebarChannel({ index, name }) {
  const className = C("pv1 ph3", "flex", "cool-sidebar-item");
  const style = {
    opacity: index === 3 || index % 4 === 0 || index % 6 === 0 ? null : "0.7",
    width: WIDTH,
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
      <b className="fw6"># {name}</b>
    ) : (
      `# ${name}`
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

SidebarChannel.displayName = "SidebarChannel";

SidebarChannel.propTypes = {
  index: PT.number.isRequired,
  name: PT.string.isRequired,
};

export default SidebarChannel;
