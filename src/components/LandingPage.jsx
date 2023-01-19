import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/landing.module.css";

const LandingPage = () => {
  return (
    <div class={style.background}>
      <h1>Order App!</h1>
      <div class={style.container}>
        <Link to="/products">
          <button class={style.btn}>
            <span>Products!</span>
          </button>
        </Link>
        <Link to="/orders">
          <button class={style.btn}>
            <span>Orders!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
