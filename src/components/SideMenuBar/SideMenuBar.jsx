import React, { useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePeople } from "react-icons/md";
import { PiBuildingsBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import darklogo from "../../assets/images/darklogo.svg"
import "./SideMenuBar.css";

const SideMenuBar = () => {
  const theme= localStorage.getItem("theme")
  return (
    <>
      <div className="side-menu-bar">
        <div className="side-menu-item">
          <div className="logo">
          {
            theme == "light" ? <img src={logo} alt="logo" />:
            <img src={darklogo} alt="logo" />
          }
           
          </div>
          <nav className="menu-items">
            <NavLink
              to="/dashboard"
              className="nav_item"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "var(--primary-color)"
                  : "var(--white-color)",
                color: isActive
                  ? "var(--white-color)"
                  : "var(--second-text-color)",
              })}
            >
              <RxDashboard  />
              &nbsp;Dashboard
            </NavLink>
            <NavLink
              to="/property"
              className="nav_item"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "var(--primary-color)"
                  : "var(--white-color)",
                color: isActive
                  ? "var(--white-color)"
                  : "var(--second-text-color)",
              })}
            >
              <PiBuildingsBold />
              &nbsp;Property
            </NavLink>
            <NavLink
              to="/agent"
              className="nav_item"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "var(--primary-color)"
                  : "var(--white-color)",
                color: isActive
                  ? "var(--white-color)"
                  : "var(--second-text-color)",
              })}
            >
              <MdOutlinePeople />
              &nbsp;Agent
            </NavLink>
            <NavLink
              to="/review"
              className="nav_item"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "var(--primary-color)"
                  : "var(--white-color)",
                color: isActive
                  ? "var(--white-color)"
                  : "var(--second-text-color)",
              })}
            >
              <AiOutlineStar />
              &nbsp;Review
            </NavLink>
            <NavLink
              to="/message"
              className="nav_item"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "var(--primary-color)"
                  : "var(--white-color)",
                color: isActive
                  ? "var(--white-color)"
                  : "var(--second-text-color)",
              })}
            >
              <BiMessageDetail />
              &nbsp;Message
            </NavLink>
            <NavLink
              to="/my-profile"
              className="nav_item"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "var(--primary-color)"
                  : "var(--white-color)",
                color: isActive
                  ? "var(--white-color)"
                  : "var(--second-text-color)",
              })}
            >
              <CgProfile/>
              &nbsp;My Profile
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideMenuBar;
