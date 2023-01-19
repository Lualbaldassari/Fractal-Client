import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import style from "../styles/table.module.css";


// const Products = () => {
//   const [products, setProducts] = useState([]);
//   console.log(products)
//   useEffect(() => {
//     const fetchAllProds = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/products");
        
        
//         setProducts(res.data.products);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllProds();
//   }, []);

  const Products = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [products, setProducts] = useState([]);
    


    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);


    useEffect(() => {
      fetch(`http://localhost:8080/api/products?page=${pageNumber}`)
        .then((response) => response.json())
        .then(({ totalPages, products }) => {
          setProducts(products);
          setNumberOfPages(totalPages);
        });
    }, [pageNumber]);
  




  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/api/products/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <h3>Page of {pageNumber  +1 }</h3>
      {products.map( product => (
        <div>
          <h4>{product.Name}</h4>
          <p>{product.Category}</p>
        </div>
      ))} */}

      {/* {pages.map((pageIndex) => (
        <button onClick={() => setPageNumber(pageIndex)}>
          {pageIndex + 1}
        </button>
      ))} */}

      <div className={style.products}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>N°</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
              <th>
                <button className={style.add}>
                  <Link to="/add">Add</Link>
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.Name}</td>
                <td>{product.Category}</td>
                <td>{product.UnitPrice}</td>
                <td>{product.Active ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    className={style.delete}
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <button className={style.edit}>
                    <Link to={`/update/${product.id}`}>Edit</Link>
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

export default Products;
