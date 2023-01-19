import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import style from "../styles/table.module.css";


// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchAllOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/orders");
//         setOrders(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllOrders();
//   }, []);


/* -------------------------------------------------------------------------- */
const Orders = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [orders, setOrders] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`http://localhost:8080/api/orders?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, orders }) => {
        setOrders(orders);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);

  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/api/orders/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
/* -------------------------------------------------------------------------- */
  return (
    <div>
      <div className={style.products}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Status</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total Amount</th>
              <th>Actions</th>
              <th>
                <button className={style.add}>
                  <Link to="/addOrder">Create Order</Link>
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.id}</td>
                <td>{order.Status}</td>
                <td>{new Date(order.Date).toLocaleDateString()}</td>
                <td>{order.Customer}</td>
                <td>{order.TotalAmount}</td>
                <td>
                  <button
                    className={style.delete}
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                  <button className={style.edit}>
                    <Link to={`/updateOrder/${order.id}`}>Edit</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={style.buttonContainer}>
        {pages.map((pageIndex) => (
          <button
            className={style.pagination}
            onClick={() => setPageNumber(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>

      <NavBar />
    </div>
  );
};

export default Orders;
