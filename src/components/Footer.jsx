"use client";

import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <h3 className="text-xl font-bold mb-4 bg-blue-700 bg-clip-text text-transparent">
              Veena Steels
            </h3>
            <p className="mb-4 text-black">
              A leading SAIL TMT distributor in Jharkhand.
            </p>
            <p className="text-black">
              Industrial Area, Balidih, Bokaro, Jharkhand, India
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-700">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["home", "about", "products", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-black hover:text-blue-600 transition duration-300 flex items-center">
                    <span className="mr-2 text-blue-700">→</span>{" "}
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-black">
                <span className="mr-2 text-blue-700">•</span>
                <span>Phone: +91 9771475402</span>
              </li>
              <li className="flex items-start text-black">
                <span className="mr-2 text-blue-700">•</span>
                <span>Email: info@vstbokaro.com</span>
              </li>
              <li className="flex items-start text-black">
                <span className="mr-2 text-blue-700">•</span>
                <span>Hours: Mon-Sat, 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t border-blue-900 text-blue-900 mt-8 pt-8 text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <p>
            &copy; {new Date().getFullYear()} Veena Steels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
