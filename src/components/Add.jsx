import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/Update.module.css";

const Add = () => {
  const [product, setProduct] = useState({
    Name: "",
    Category: "",
    UnitPrice: null,
    Status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(product);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/products/", product);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.form}>
      <h1 className={style.header}> Add a new product </h1>

      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="Name"
      />
      <input
        type="text"
        placeholder="category"
        onChange={handleChange}
        name="Category"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="UnitPrice"
      />
      <input type="checkbox" onChange={handleChange} name="Status" />

      <button className={style.btn} onClick={handleClick}>
        Add
      </button>
      <Link to="/products">
        <button className={style.btn}>Back</button>
      </Link>
    </div>
  );
};

export default Add;
