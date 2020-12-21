import C from "classnames";
import PT from "prop-types";
import * as React from "react";

const OFFLINE = "\u25CB";
const ONLINE = "\u25CF";
const WIDTH = "220px";

function SidebarPerson({ index, name }) {
  const isOnline = index % 5 <= 2;
  const icon = isOnline ? ONLINE : OFFLINE;
  const className = C("pv1 ph3", "o-70", "cool-sidebar-item");
  const style = { width: WIDTH };
  return (
    <div style={style} className={className}>
      {icon} {name}
    </div>
  );
}

SidebarPerson.displayName = "SidebarPerson";

SidebarPerson.propTypes = {
  index: PT.number.isRequired,
  name: PT.string.isRequired,
};

export default SidebarPerson;
