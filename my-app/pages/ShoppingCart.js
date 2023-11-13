import React, { useState, useContext } from "react";
import { CartNumContext, SetCartNumContext } from "@/pages/_app.js";
import Link from "next/link";

export default function ShoppingCart(props) {
  const cartData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) || []
      : [];
  const setCart = useContext(SetCartNumContext);
  const total = cartData.reduce((acc, item) => acc + item.price, 0);
  setCart(cartData.length);

  return (
    <div className="mt-10 p-10 flex flex-col gap-4 content-evenly">
      <h2 className="font-semibold text-4xl">Shopping Cart</h2>
      <ul className="text-xl font-semibold">
        {cartData.map((item) => (
          <li key={item.id}>
            {item.title} -{" "}
            <span className="w-fit text-xl text-white font-semibold bg-amber-500">
              ${item.price}
            </span>
          </li>
        ))}
      </ul>
      <hr />
      <p className="w-fit text-xl text-white font-semibold bg-orange-600">
        Total: ${total.toFixed(2)}
      </p>
    </div>
  );
}
