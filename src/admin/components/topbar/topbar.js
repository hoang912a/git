import React from "react";
import "./topbar.css";

import { SearchOutlined, SettingOutlined, FilterOutlined, UserOutlined } from "@ant-design/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Travel admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <SettingOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <FilterOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <UserOutlined />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
