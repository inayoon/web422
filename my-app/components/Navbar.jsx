import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartNumContext, SetCartNumContext } from "@/pages/_app.js";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const cartnum = useContext(CartNumContext);

  return (
    <>
      <h1 className="flex items-center gap-4 font-semibold text-4xl my-6 ml-4">
        Shop With Us(Web422_assignment)
      </h1>
      <Link
        href="/"
        className="ml-4 text-lg bg-orange-50 underline hover:underline-offset-4"
      >
        Home
      </Link>{" "}
      |{" "}
      <Link
        href="/about"
        className="text-lg bg-orange-50 underline hover:underline-offset-4"
      >
        About
      </Link>{" "}
      |{" "}
      <Link
        href="/dashboard"
        className="text-lg bg-orange-50 underline hover:underline-offset-4"
      >
        Dashboard
      </Link>{" "}
      |{" "}
      <Link
        href="/dashboard/preferences"
        className="text-lg bg-orange-50 underline hover:underline-offset-4"
      >
        Dashboard Preferences
      </Link>{" "}
      |{" "}
      <Link
        href="/Product"
        className="text-lg bg-orange-50 underline hover:underline-offset-4"
      >
        Products
      </Link>{" "}
      |{" "}
      <Link
        href="/ShoppingCart"
        className="text-lg bg-orange-50 underline hover:underline-offset-4"
      >
        Shopping cart({cartnum})
      </Link>
      <br />
      {props.children}
      <br />
    </>
  );
}
