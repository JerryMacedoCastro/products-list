import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.active}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={styles.link}
            activeClassName={styles.active}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
