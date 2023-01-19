import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <NavLink to="/" className={style.btn}>
        Home
      </NavLink>
      <NavLink to="/products" className={style.btn}>
        Products
      </NavLink>
      <NavLink to="/orders" className={style.btn}>
        Orders
      </NavLink>
    </div>
  );
};

export default NavBar;
