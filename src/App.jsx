"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductSpecifications from "./components/ProductSpecifications";
import ProductTable from "./components/ProductTable";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-navy-950 text-white ${
        isLoaded ? "animate-fade-in" : "opacity-0"
      }`}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <ProductSpecifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
