// "use client";

// import { useState, useEffect } from "react";

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative py-32 md:py-48 bg-white">
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           {/* Heading */}
//           <h1
//             className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
//               isVisible ? "opacity-100" : "opacity-0 translate-y-10"
//             }`}>
//             <span className="text-blue-400">Authorised SAIL Distributors</span>{" "}
//             <span className="text-blue-900">of Steel and Iron Products</span>
//           </h1>

//           {/* Subtext */}
//           <p
//             className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 text-black transition-all duration-1000 delay-300 ${
//               isVisible ? "opacity-100" : "opacity-0 translate-y-10"
//             }`}>
//             Veena Steel Traders is a trusted supplier of premium-quality Iron
//             and Steel from SAIL, ensuring strength and reliability for your
//             construction needs.
//           </p>

//           {/* CTA Buttons */}
//           <div
//             className={`transition-all duration-1000 delay-500 ${
//               isVisible ? "opacity-100" : "opacity-0 translate-y-10"
//             }`}>
//             <a
//               href="#contact"
//               className="inline-block bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//               Contact Us
//             </a>
//             <a
//               href="#products"
//               className="inline-block ml-4 bg-blue-900 text-white hover:bg-blue-700 font-medium py-3 px-6 border border-blue-900 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//               We Deal With
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// "use client";

// import { useState, useEffect } from "react";

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative py-24 md:py-36 lg:py-48 bg-gradient-to-b from-white to-blue-50">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
//         <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
//         <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-blue-100 rounded-full opacity-40"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         <div className="text-center">
//           {/* Main heading with improved styling */}
//           <div
//             className={`mb-4 transition-all duration-1000 ${
//               isVisible ? "opacity-100" : "opacity-0 translate-y-10"
//             }`}>
//             <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-3">
//               SAIL Authorized Distributor
//             </span>
//           </div>

//           <h1
//             className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-1000 ${
//               isVisible ? "opacity-100" : "opacity-0 translate-y-10"
//             }`}>
//             <span className="text-blue-600 block md:inline">Premium Steel</span>{" "}
//             <span className="text-blue-900 block md:inline">
//               for Every Project
//             </span>
//           </h1>

//           {/* Enhanced subtext */}
//           <p
//             className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed transition-all duration-1000 delay-300 ${
//               isVisible ? "opacity-100" : "opacity-0 translate-y-10"
//             }`}>
//             Veena Steel Traders is your trusted supplier of premium-quality Iron
//             and Steel from SAIL, delivering industry-leading materials with
//             unmatched strength and reliability for all your construction needs.
//           </p>

//           {/* Improved CTA Buttons */}
//           <div
//             className={`space-y-4 md:space-y-0 md:space-x-6 transition-all duration-1000 delay-500 ${
//               isVisible ? "opacity-100" : "opacity-0 translate-y-10"
//             }`}>
//             <a
//               href="#contact"
//               className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//               Contact Us
//             </a>
//             <a
//               href="#products"
//               className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 border-2 border-blue-700 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
//               View Products
//             </a>
//           </div>

//           {/* Trust indicators */}
//           <div
//             className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 delay-700 ${
//               isVisible ? "opacity-100" : "opacity-0"
//             }`}>
//             <div className="flex items-center text-gray-600">
//               <svg
//                 className="w-5 h-5 text-yellow-500 mr-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//               <span className="font-medium">20+ Years Experience</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <svg
//                 className="w-5 h-5 text-yellow-500 mr-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20">
//                 <path
//                   fillRule="evenodd"
//                   d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="font-medium">Quality Assured</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <svg
//                 className="w-5 h-5 text-yellow-500 mr-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20">
//                 <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//               </svg>
//               <span className="font-medium">1000+ Happy Clients</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  useEffect(() => {
    // Trigger initial animations
    setIsVisible(true);

    // Optional: Add floating animation for decorative elements
    const decorElements = document.querySelectorAll(".decor-element");
    decorElements.forEach((elem, i) => {
      setInterval(() => {
        elem.style.transform = `translateY(${
          Math.sin(Date.now() / 1000 + i) * 10
        }px)`;
      }, 50);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative py-24 md:py-36 lg:py-48 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="decor-element absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full opacity-50 transition-transform duration-1000"></div>
        <div className="decor-element absolute top-1/4 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 transition-transform duration-1000 delay-500"></div>
        <div className="decor-element absolute bottom-10 left-1/3 w-48 h-48 bg-blue-100 rounded-full opacity-40 transition-transform duration-1000 delay-1000"></div>
      </div>

      {/* Animated sparkles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `sparkle ${
                Math.random() * 3 + 2
              }s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Animated badge */}
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-3 animate-pulse">
              SAIL Authorized Distributor
            </span>
          </div>

          {/* Main heading with staggered animation */}
          <h1 className="overflow-hidden mb-8">
            <span
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 block md:inline transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              Premium Steel
            </span>{" "}
            <span
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 block md:inline transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              for Every Project
            </span>
          </h1>

          {/* Enhanced subtext with typing animation feel */}
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Veena Steel Traders is your trusted supplier of premium-quality Iron
            and Steel from SAIL, delivering industry-leading materials with
            unmatched strength and reliability for all your construction needs.
          </p>

          {/* Interactive CTA Buttons with hover effects */}
          <div
            className={`space-y-4 md:space-y-0 md:space-x-6 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <a
              href="#contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}>
              <span
                className={`relative z-10 transition-transform duration-300 ${
                  hoverContact ? "transform -translate-y-px" : ""
                }`}>
                Contact Us
              </span>
              <span
                className={`absolute inset-0 bg-blue-600 transition-transform duration-300 ${
                  hoverContact ? "transform scale-100" : "transform scale-0"
                }`}
                style={{
                  transformOrigin: "center",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}></span>
            </a>
            <a
              href="#products"
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 border-2 border-blue-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
              onMouseEnter={() => setHoverProducts(true)}
              onMouseLeave={() => setHoverProducts(false)}>
              <span
                className={`relative z-10 transition-transform duration-300 ${
                  hoverProducts ? "transform -translate-y-px" : ""
                }`}>
                View Products
              </span>
              <span
                className={`absolute inset-0 bg-blue-100 transition-transform duration-300 ${
                  hoverProducts ? "transform scale-100" : "transform scale-0"
                }`}
                style={{
                  transformOrigin: "center",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}></span>
            </a>
          </div>

          {/* Animated trust indicators */}
          <div
            className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            {[
              { icon: "star", text: "20+ Years Experience", delay: 0 },
              { icon: "badge", text: "Quality Assured", delay: 200 },
              { icon: "users", text: "1000+ Happy Clients", delay: 400 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center text-gray-600 transition-all duration-500"
                style={{
                  animationDelay: `${item.delay}ms`,
                  animation: isVisible ? "fadeInUp 0.6s forwards" : "none",
                }}>
                {item.icon === "star" && (
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2 animate-spin-slow"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
                {item.icon === "badge" && (
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2 animate-pulse-slow"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {item.icon === "users" && (
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2 animate-bounce-slow"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                )}
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes sparkle {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.5);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.9);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-4px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
