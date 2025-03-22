"use client";

import { useState, useEffect, useRef } from "react";
import flatProductImage from "../assets/flat product.webp";
import pipesImage from "../assets/pipes.jpg";
import tmtImage from "../assets/tmt.jpg";
import longProductIamge from "../assets/longProduct.webp";

const Products = () => {
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

  const products = [
    {
      id: 1,
      name: "SAIL TMT Bars",
      description:
        "Premium quality TMT bars from Steel Authority of India Limited (SAIL), ideal for reinforced concrete structures.",
      features: [
        "High tensile strength",
        "Earthquake resistant",
        "Better bendability",
        "Corrosion resistant",
      ],
      image: tmtImage,
    },
    {
      id: 2,
      name: "Pipes and Tubes",
      description:
        "We supply high-grade iron and steel products suitable for construction, manufacturing, and industrial applications.",
      features: [
        "Durable and strong",
        "High-quality material",
        "Variety of grades available",
        "Customizable sizes",
      ],
      image: pipesImage,
    },
    {
      id: 3,
      name: "Long Products",
      description:
        "We offer a range of long steel products including beams, channels, and angles for structural applications.",
      features: [
        "High load-bearing capacity",
        "Excellent weldability",
        "Standard and custom sizes",
        "Cost-effective solutions",
      ],
      image: longProductIamge,
    },
    {
      id: 4,
      name: "Flat Products",
      description:
        "Our range of flat steel products includes sheets, plates, and coils for industrial and commercial use.",
      features: [
        "High surface quality",
        "Precision thickness",
        "Good formability",
        "Wide range of applications",
      ],
      image: flatProductImage,
    },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-8 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className="bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
              Products We Deal With
            </span>
          </h2>
          <p
            className={`text-black max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            We are an authorized distributor of SAIL TMT Bars, Iron & Steel,
            Long Products, and Flat Products, ensuring the best quality for your
            construction and industrial needs.
          </p>
          <div
            className={`h-1 w-20 bg-blue-900 mx-auto mt-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-300 hover:border-[#DD88CF] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 animate-slide-up"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}>
              {/* Product Image */}
              <div className="md:w-2/5 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 md:w-3/5">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-black mb-4">{product.description}</p>
                <h4 className="font-medium text-blue-700 mb-2">
                  Key Features:
                </h4>
                <ul className="list-disc pl-5 text-black">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <p className="text-black mb-6">
            Need a custom solution or have specific requirements? Contact us for
            more information.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
