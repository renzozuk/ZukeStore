import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Freight from "./components/Freight.jsx";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import { Outlet } from "react-router-dom";

export default function App() {

  const [showFreight, setShowFreight] = useState(false);

  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}