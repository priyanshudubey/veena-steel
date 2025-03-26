"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Search, ChevronDown } from "lucide-react";
import logoImage from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Products", link: "#products", hasDropdown: false },
    { name: "Product Specifications", link: "#product Specifications" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 lg:top-auto w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white text-blue-900 shadow-lg lg:py-2"
            : "bg-blue-900 text-white lg:bg-white lg:text-blue-900 lg:py-4"
        }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-auto">
            {/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 relative overflow-hidden rounded-md shadow-md mr-3 bg-white p-1">
                <img
                  src={logoImage}
                  alt="Veena Steel Traders"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-bold transition-colors duration-300 ${
                    scrolled ? "text-blue-900" : "text-white lg:text-blue-900"
                  }`}>
                  Veena Steel
                </span>
                <span
                  className={`text-xs transition-colors duration-300 ${
                    scrolled
                      ? "text-blue-700"
                      : "text-blue-200 lg:text-blue-700"
                  }`}>
                  Premium SAIL TMT Distributor
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group">
                    <a
                      href={item.link}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                        activeItem === item.name.toLowerCase()
                          ? "text-blue-700 bg-blue-50"
                          : "text-blue-900 hover:text-blue-700 hover:bg-blue-50"
                      }`}
                      onClick={() => setActiveItem(item.name.toLowerCase())}>
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}
                    </a>

                    {/* Dropdown for Products */}
                    {item.hasDropdown && (
                      <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                        <div className="py-1">
                          {[
                            "SAIL TMT",
                            "Structural Steel",
                            "MS Plates",
                            "Steel Wires",
                          ].map((subItem) => (
                            <a
                              key={subItem}
                              href={`#${subItem
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Search Button */}
              <div className="ml-6 relative">
                <button
                  onClick={toggleSearch}
                  className="p-2 rounded-full hover:bg-blue-50 text-blue-700 transition-colors duration-300">
                  <Search size={20} />
                </button>

                {/* Search dropdown */}
                {searchOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg p-4 transition-all duration-300">
                    <div className="flex items-center border border-blue-200 rounded-md overflow-hidden">
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 focus:outline-none text-gray-700"
                      />
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2">
                        <Search size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="ml-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors duration-300">
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
                  scrolled
                    ? "text-blue-900 hover:text-white hover:bg-blue-700"
                    : "text-white hover:text-blue-900 hover:bg-blue-200"
                }`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-blue-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.link}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      activeItem === item.name.toLowerCase()
                        ? "text-white bg-blue-700"
                        : "text-blue-900 hover:text-white hover:bg-blue-700"
                    }`}
                    onClick={() => {
                      setActiveItem(item.name.toLowerCase());
                      if (!item.hasDropdown) toggleMenu();
                    }}>
                    <div className="flex justify-between items-center">
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            activeItem === item.name.toLowerCase()
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </div>
                  </a>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown &&
                    activeItem === item.name.toLowerCase() && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-blue-50 rounded-md mt-1 mb-2">
                        {[
                          "SAIL TMT",
                          "Structural Steel",
                          "MS Plates",
                          "Steel Wires",
                        ].map((subItem) => (
                          <a
                            key={subItem}
                            href={`#${subItem
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-blue-900 hover:text-white hover:bg-blue-600 transition-all duration-300"
                            onClick={toggleMenu}>
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {/* Mobile search */}
              <div className="px-3 py-2">
                <div className="flex items-center border border-blue-200 rounded-md overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 text-sm focus:outline-none text-gray-700"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2">
                    <Search size={16} />
                  </button>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-3 py-2">
                <a
                  href="#contact"
                  className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                  onClick={toggleMenu}>
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div
        className={`h-16 lg:h-${
          scrolled ? "16" : "24"
        } transition-all duration-300`}></div>
    </>
  );
};

export default Navbar;
