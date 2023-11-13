import React, { useState, useContext } from "react";
import { CartNumContext, SetCartNumContext } from "@/pages/_app.js";
import Link from "next/link";

export default function ShoppingCart(props) {
  const cartData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) || []
      : [];
  const setCart = useContext(SetCartNumContext);
  setCart(cartData.length);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartData.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
