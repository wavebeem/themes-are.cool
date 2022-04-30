import PT from "prop-types";
import * as React from "react";
import SidebarChannel from "./SidebarChannel";
import SidebarPerson from "./SidebarPerson";

const CHANNELS = [
  "general",
  "announcements",
  "fun-games",
  "fun-news",
  "team-red",
  "team-blue",
  "team-green",
  "team-yellow",
];

const NAMES = [
  "Shanna Adras",
  "Xel Madine",
  "Auros Green",
  "Makon Covell",
  "Saubio Tobian",
  "Candurous Marr",
  "Surro Starr",
  "Rayf Mantisa",
];

function Sidebar({ theme }) {
  return (
    <div className="min-h-100 pt3 pb3 fw4 br b--cool lh-title cool-sidebar">
      <div className="o-70 f5 pl3 mb2">Channels</div>
      {CHANNELS.map((c, i) => (
        <SidebarChannel key={i} index={i} name={c} />
      ))}
      <div className="o-70 f5 pl3 mb2 mt4">Direct Messages</div>
      {NAMES.map((p, i) => (
        <SidebarPerson key={i} index={i} name={p} />
      ))}
    </div>
  );
}

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  theme: PT.object.isRequired,
};

export default Sidebar;
