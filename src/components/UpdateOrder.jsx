import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "../styles/Update.module.css";

const UpdateOrder = () => {
  const [order, setOrder] = useState({
    consumer: "",
    status: "",
    date: null,
    total: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(order);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8080/orders" + orderId, order);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.form}>
      <h1 className={style.header}>Update a new Order</h1>
      <input
        type="text"
        placeholder="consumer"
        onChange={handleChange}
        name="consumer"
      />
      <input
        type="date"
        placeholder="date"
        onChange={handleChange}
        name="date"
      />
      <input
        type="number"
        placeholder="total"
        onChange={handleChange}
        name="total"
      />
      <input
        type="text"
        placeholder="status"
        onChange={handleChange}
        name="status"
      />
      <button className={style.btn} onClick={handleClick}>
        Update
      </button>
      <Link to="/orders">
        <button className={style.btn}>Back</button>
      </Link>
    </div>
  );
};

export default UpdateOrder;
