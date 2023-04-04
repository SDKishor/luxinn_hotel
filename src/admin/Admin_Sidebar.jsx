import React, { useContext } from "react";
import {
  BsBarChartSteps,
  BsBoxArrowLeft,
  BsFillPersonFill,
  BsGrid1X2Fill,
} from "react-icons/bs";
import {
  FaBriefcaseMedical,
  FaCogs,
  FaCreditCard,
  FaRegBell,
  FaRegChartBar,
  FaRegUser,
  FaStoreAlt,
  FaTruck,
  FaUtensils,
} from "react-icons/fa";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Admin_Sidebar = () => {
  const { dispatch: authDispatch } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <div className="w-[250px] border-r border-primary " id="sidebar">
      <ul>
        <p className="title text-primary/70">Main</p>
        <NavLink to="/admin/dashboard">
          <BsGrid1X2Fill className="icon" />
          <span>Dashboard</span>
        </NavLink>
        <p className="title text-primary/70">Lists</p>
        <NavLink to="/admin/userslist">
          <BsFillPersonFill className="icon" />
          <span>Users</span>
        </NavLink>
        <NavLink to="/admin/hotels">
          <FaStoreAlt className="icon" />
          <span>Hotel</span>
        </NavLink>
        <NavLink to="/admin/restaurant">
          <FaUtensils className="icon" />
          <span>Restaurent</span>
        </NavLink>

        <p className="title text-primary/70">Usefull</p>
        <NavLink to="/admin/stats">
          <FaRegChartBar className="icon" />
          <span>stats</span>
        </NavLink>
        <NavLink to="/admin/notifications">
          <FaRegBell className="icon" />
          <span>notifications</span>
        </NavLink>
        <p className="title text-primary/70">Service</p>
        <NavLink to="/admin/systemhealth">
          <FaBriefcaseMedical className="icon" />
          <span>System Health</span>
        </NavLink>
        <NavLink to="/admin/logs">
          <BsBarChartSteps className="icon" />
          <span>logs</span>
        </NavLink>
        <NavLink to="/admin/Setting">
          <FaCogs className="icon" />
          <span>Settings</span>
        </NavLink>
        <p className="title text-primary/70">user</p>
        <NavLink to="/admin/profile">
          <FaRegUser className="icon" />
          <span>profile</span>
        </NavLink>
        <button onClick={handleLogout} className="flex">
          <BsBoxArrowLeft className="icon" />
          <span>Logout</span>
        </button>
      </ul>
    </div>
  );
};
