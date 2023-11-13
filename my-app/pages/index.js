import Banner from "@/components/Banner";
import Products from "@/components/Products";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <h3 className="text-5xl mt-10 text-center">Our Mission and Statement</h3>
      <p className="text-3xl mt-10 text-center bg-orange-100 ">
        Shop with Us has adopted a sustainability mission statement, "Unlocking
        the Power of Clothing". Aiming for harmony, the sustainable stewardship
        of natural resources and responsible development of human potential, we
        focus on planet, people and community. We believe that our clothing has
        the power to change the world for the better.
      </p>
      <Products />
    </>
  );
}
