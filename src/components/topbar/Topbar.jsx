import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="data:image/png;base64,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"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
