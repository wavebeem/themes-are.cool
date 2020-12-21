import PT from "prop-types";
import React from "react";
import SidebarItem from "./SidebarItem";

const CHANNELS = [
  "general",
  "video-games",
  "running",
  "archery",
  "qa",
  "frontend",
  "backend",
  "announcements",
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
        <SidebarItem theme={theme} type="channel" key={i} index={i} name={c} />
      ))}
      <div className="o-70 f5 pl3 mb2 mt4">Direct Messages</div>
      {NAMES.map((p, i) => (
        <SidebarItem theme={theme} type="person" key={i} index={i} name={p} />
      ))}
    </div>
  );
}

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  theme: PT.object.isRequired,
};

export default Sidebar;
