import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "../styles/Update.module.css";

const Update = () => {
  const [product, setProduct] = useState({
    Name: "",
    Category: "",
    Price: null,
    Status: false,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(product);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:8080/api/products/" + productId,
        product
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.form}>
      <h1 className={style.header}>Update a new product</h1>
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
      <label>
        Status:
        <input
          type="checkbox"
          checked={product.Status}
          onChange={(e) => setProduct({ ...product, Status: e.target.checked })}
        />
      </label>
      <button className={style.btn} onClick={handleClick}>
        Update
      </button>
      <Link to="/products">
        <button className={style.btn}>Back</button>
      </Link>
    </div>
  );
};

export default Update;
