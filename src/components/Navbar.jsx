"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-blue-900 shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-white bg-clip-text text-transparent">
              <img
                src={logoImage}
                alt="Veena Steel Traders"
                className="h-8"
              />
              Veena Steel Traders
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                "home",
                "about",
                "products",
                "product Specifications",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-900 hover:bg-blue-200 transition-all duration-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-blue-200 focus:outline-none transition-all duration-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-200 bg-opacity-95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              "home",
              "about",
              "products",
              "product Specifications",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-blue-700 transition-all duration-300"
                onClick={toggleMenu}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
