import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Modal from "../components/Modal";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [modals, setModals] = useState(false);
  const [index, setIndex] = useState(0);
  const fetchProductsData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (err) {
      console.log("Error fetching products");
    }
  };
  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <section>
      {modals == true ? (
        <Modal
          products={products}
          index={index}
          setModals={setModals}
          modals={modals}
        />
      ) : null}
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr
              key={item.id}
              onClick={() => {
                setModals(true);
                setIndex(i);
              }}
            >
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td>
                <img src={item.image} width="100" height="100" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
