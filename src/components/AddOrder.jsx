import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/Update.module.css";

const AddOrder = () => {
  const [order, setOrder] = useState({
    OrderNumber: null,
    Status: "",
    Date: null,
    Consumer:"",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(order);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/orders", order);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.form}>
      <h1 className={style.header}>Add a new Order</h1>
      <input
        type="number"
        placeholder="Order Number"
        onChange={handleChange}
        name="OrderNumber"
      />
      <select name="Status" onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="rejected">Rejected</option>
      </select>
      
      <input
        type="date"
        placeholder="Date"
        onChange={handleChange}
        name="Date"
      />
      <input
        type="text"
        placeholder="Customer"
        onChange={handleChange}
        name="Customer"
      />
      <button className={style.btn} onClick={handleClick}>
        Add
      </button>
      <Link to="/orders">
        <button className={style.btn}>Back</button>
      </Link>
    </div>
  );
};

export default AddOrder;
