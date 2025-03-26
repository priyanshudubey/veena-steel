"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className="bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p
            className={`text-black max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            Have questions about our products or services? We're here to help
            you with any inquiries.
          </p>
          <div
            className={`h-1 w-20 bg-blue-900 mx-auto mt-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg h-full border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone
                    className="text-white"
                    size={24}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
                Call Us
              </h3>
              <div className="space-y-3 text-center">
                <a
                  href="tel:+919771475402"
                  className="text-black block hover:text-blue-700 transition-colors">
                  +91 9771475402
                </a>
                <a
                  href="tel:+919123241275"
                  className="text-black block hover:text-blue-700 transition-colors">
                  +91 9123241275
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center justify-center space-x-2">
                  <FaWhatsapp
                    className="text-blue-700"
                    size={20}
                  />
                  <a
                    href="https://wa.me/919123241275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-600 font-medium">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg h-full border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail
                    className="text-white"
                    size={24}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
                Email Us
              </h3>
              <div className="space-y-3 text-center">
                <a
                  href="mailto:info@vstbokaro.com"
                  className="text-black block hover:text-blue-700 transition-colors">
                  info@vstbokaro.com
                </a>
                <a
                  href="mailto:veenasteel@gmail.com"
                  className="text-black block hover:text-blue-700 transition-colors">
                  veenasteel@gmail.com
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200 text-center">
                <p className="text-gray-700 text-sm">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg h-full border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin
                    className="text-white"
                    size={24}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
                Visit Us
              </h3>
              <div className="text-center">
                <p className="text-black">
                  Veena Steel Traders, <br />
                  Industrial Area, Bokaro, <br />
                  Jharkhand, India <br />
                  Pin - 827014
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200 flex items-center justify-center">
                <Clock
                  className="text-blue-700 mr-2"
                  size={16}
                />
                <p className="text-gray-700 text-sm">
                  Mon-Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div
          className={`mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-blue-800 text-center">
              Find Us Here
            </h3>
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57499.63918521113!2d86.08410605551235!3d23.669296169526467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f42e769b6a8b55%3A0xb3d7e508a579cfe4!2sVeena%20Steels%20Bokaro!5e0!3m2!1sen!2sin!4v1709999999999"
              allowFullScreen
              loading="lazy"></iframe>

            <div className="mt-6 text-center">
              <p className="text-gray-700">
                Our facility is easily accessible from the main highway. Feel
                free to visit us during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
