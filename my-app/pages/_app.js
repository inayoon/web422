import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import react, { useState, createContext } from "react";
import ShoppingCart from "./ShoppingCart";

export const CartNumContext = createContext();
export const SetCartNumContext = createContext();

function MyApp({ Component, pageProps }) {
  const [cartNum, setCartNum] = useState(0);
  return (
    <>
      <CartNumContext.Provider value={cartNum}>
        <SetCartNumContext.Provider value={setCartNum}>
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        </SetCartNumContext.Provider>
      </CartNumContext.Provider>
    </>
  );
}

export default MyApp;
