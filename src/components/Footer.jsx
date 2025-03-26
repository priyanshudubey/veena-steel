"use client";

import { useState, useEffect, useRef } from "react";
import logoImage from "../assets/logo.jpg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

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

  // Social media icons
  const socialIcons = [
    {
      name: "Facebook",
      icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    },
    {
      name: "Twitter",
      icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    },
    {
      name: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">
                  <img
                    src={logoImage}
                    alt="Veena Steel Traders"
                    className="h-8"
                  />
                </span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Veena Steel Traders
              </h3>
            </div>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A leading SAIL TMT distributor in Jharkhand, delivering quality
              steel products since 1995.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <p className="text-gray-800 flex items-start">
                <svg
                  className="w-5 h-5 text-blue-700 mr-2 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Industrial Area, Balidih, Bokaro,
                <br />
                Jharkhand, India - 827014
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 transform delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}>
            <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-blue-200 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Home",
                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                },
                {
                  name: "About",
                  icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                { name: "Products", icon: "M7 7h10v10H7z" },
                {
                  name: "Contact",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                },
              ].map((item) => (
                <li
                  key={item.name}
                  className="group">
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-700 transition duration-300 flex items-center bg-white hover:bg-blue-50 p-2 rounded-md group-hover:pl-4">
                    <svg
                      className="w-5 h-5 mr-3 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 transform delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}>
            <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-blue-200 pb-2">
              Get In Touch
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start text-gray-700 group hover:text-blue-700 transition-colors duration-300">
                <div className="mr-3 p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium block text-gray-900">Phone</span>
                  <span>+91 9771475402</span>
                </div>
              </li>
              <li className="flex items-start text-gray-700 group hover:text-blue-700 transition-colors duration-300">
                <div className="mr-3 p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium block text-gray-900">Email</span>
                  <span>info@vstbokaro.com</span>
                </div>
              </li>
              <li className="flex items-start text-gray-700 group hover:text-blue-700 transition-colors duration-300">
                <div className="mr-3 p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium block text-gray-900">Hours</span>
                  <span>Mon-Sat, 9:00 AM - 6:00 PM</span>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <div className="flex space-x-3 mt-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-blue-600 border border-blue-200 rounded-full flex items-center justify-center text-blue-700 hover:text-white transition-colors duration-300 shadow-sm"
                    aria-label={social.name}>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t border-blue-200 mt-12 pt-8 text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <div className="flex justify-center items-center text-gray-600 text-sm">
            <p>&copy; {currentYear} Veena Steels. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
