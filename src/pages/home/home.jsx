import { Banners } from "../../components/banners/Banners";
import Navbar from "../../components/navbar/navbar";
import Product from "../../components/product/product";

import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banners />
      <Product />
    </div>
  );
};

export default Home;
