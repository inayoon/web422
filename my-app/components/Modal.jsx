import React, { useState, useContext } from "react";
import { CartNumContext, SetCartNumContext } from "@/pages/_app.js";
import { useAtom } from "jotai";

export default function Modal(props) {
  const handleCart = () => {
    const data = props.products[props.index];
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    currentCart.push(data);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };
  const setCart = useContext(SetCartNumContext);
  const cartnum = useContext(CartNumContext);

  return (
    <div class="modal__background">
      <div class="modal__box">
        <h3 className="text-amber-50 font-bold bg-orange-600 px-8 text-3xl">
          {props.products[props.index].title}
        </h3>
        <p className="text-xl font-semibold">
          Price: ${props.products[props.index].price}
        </p>
        <p className="text-lg px-8">
          Description:
          <br /> {props.products[props.index].description}
        </p>
        <p className="text-lg font-semibold">
          Category: {props.products[props.index].category}
        </p>
        <p className="text-lg font-semibold bg-yellow-400 text-white mb-4">
          Rating: {props.products[props.index].rating.rate}
        </p>
        <img
          src={props.products[props.index].image}
          width="100"
          height="100"
          alt=""
        />
        <button
          className="bg-amber-500 text-white font-bold rounded-full mt-12 mb-2 py-2 px-6"
          onClick={() => props.setModals(false)}
        >
          Close
        </button>
        <button
          className="bg-lime-500 text-white font-bold rounded-full mt-4 py-2 px-6"
          onClick={() => {
            handleCart(props);
            setCart((n) => n + 1);
            props.setModals(false);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
