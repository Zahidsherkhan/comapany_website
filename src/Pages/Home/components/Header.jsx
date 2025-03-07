import React from "react";
import styles from "../Styling/Header.module.css";
import logo from "../assets/images_Landing_Page/Logo.jpeg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <NavLink to="/">
          <img srcSet={logo} alt="LOGO" className={styles.logo} />
        </NavLink>
      </div>
      <nav className={styles.navigation}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/Become_a_Partner"
        >
          Become a Partner
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/Services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/Contact_us"
        >
          Contact Us
        </NavLink>

        <div></div>
      </nav>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/Get_a_quote"
        >
          <button className={styles.btn}>Get a Qoute</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
