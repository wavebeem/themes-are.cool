import React from "react";

import SidebarItem from "./SidebarItem";
import ThemeType from "./prop-types/theme";

const CHANNELS = [
  "general",
  "video-games",
  "running",
  "archery",
  "build",
  "qa",
  "frontend",
  "backend",
  "random",
  "announcements"
];

const NAMES = [
  "Shanna Adras",
  "Xel Madine",
  "Auros Green",
  "Makon Covell",
  "Robert Driet",
  "Saubio Tobian",
  "Candurous Marr",
  "Surro Starr",
  "Rayf Mantisa",
  "Gallegher Lerann"
];

function Sidebar({ theme }) {
  return (
    <div
      style={{
        background: theme.primaryColor,
        color: theme.themeType === "dark" ? "white" : "black"
      }}
      className={"min-h-100 pt3 pb3 fw4 br b--light-gray lh-title"}
    >
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
  theme: ThemeType.isRequired
};

export default Sidebar;
