import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import "./Navbar.css";
import EmergencyInfo from "./EmergencyInfo";

const Navbar = () => {
    const [showEmergency, setShowEmergency] = useState(false);

  const handleEmergencyClick = () => {
    setShowEmergency(true);
  };

  const handleCloseEmergency = () => {
    setShowEmergency(false);
  }
  const Links = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "border-b-2" : "")}
        to="/"
      >
        {" "}
        <li className="font-bold mr-4 cursor-pointer ">Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border-b-2" : "")}
        to="/Bookings"
      >
        {" "}
        <li className="font-bold mr-4 cursor-pointer">Bookings</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border-b-2" : "")}
        to="/Blogs"
      >
        {" "}
        <li className="font-bold mr-4 cursor-pointer">Blog</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border-b-2" : "")}
        to="/Contact"
      >
        {" "}
        <li className="font-bold mr-4 cursor-pointer">Contact us</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-xl text-sm -ml-4">
          <img className="h-5 w-5 lg:h-10 lg:w-10" src={logo} alt="" /><h2 className="font-bold">MEDOVA</h2>

        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <button onClick={handleEmergencyClick} className="btn bg-[#176AE5] text-white rounded-lg">Emergency</button>
      </div>
        {showEmergency && <EmergencyInfo onClose={handleCloseEmergency} />}
    </div>
  );
};

export default Navbar;
