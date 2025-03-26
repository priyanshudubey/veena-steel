"use client";

import { useState, useEffect, useRef } from "react";
import certificateImage from "../assets/certificate.png";
import veenaRegencyImage from "../assets/veenaRegency.jpg";
import hansRegencyImage from "../assets/hansRegency.jpg";
import isoCertificateImage from "../assets/iso-certificate.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [venturesVisible, setVenturesVisible] = useState(false);
  const [stakeholdersVisible, setStakeholdersVisible] = useState(false);
  const [personnelVisible, setPersonnelVisible] = useState(false);
  const sectionRef = useRef(null);
  const venturesRef = useRef(null);
  const stakeholdersRef = useRef(null);
  const personnelRef = useRef(null);

  useEffect(() => {
    const observeSection = (ref, setVisibilityFn) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibilityFn(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const mainObserver = observeSection(sectionRef, setIsVisible);
    const venturesObserver = observeSection(venturesRef, setVenturesVisible);
    const stakeholdersObserver = observeSection(
      stakeholdersRef,
      setStakeholdersVisible
    );
    const personnelObserver = observeSection(personnelRef, setPersonnelVisible);

    return () => {
      if (sectionRef.current) mainObserver.unobserve(sectionRef.current);
      if (venturesRef.current) venturesObserver.unobserve(venturesRef.current);
      if (stakeholdersRef.current)
        stakeholdersObserver.unobserve(stakeholdersRef.current);
      if (personnelRef.current)
        personnelObserver.unobserve(personnelRef.current);
    };
  }, []);

  // Ventures data
  const ventures = [
    {
      name: "Hotel Hans Regency",
      location: "Bokaro",
      description:
        "A premium hotel offering luxurious accommodations and exceptional service for business and leisure travelers visiting Bokaro.",
      image: hansRegencyImage, // Replace with actual hotel image
    },
    {
      name: "Hotel Veena Regency",
      location: "Chas, Bokaro",
      description:
        "Experience comfort and hospitality at Hotel Veena Regency, featuring modern amenities and convenient location in Chas, Bokaro.",
      image: veenaRegencyImage, // Replace with actual hotel image
    },
  ];

  // Stakeholders data
  const stakeholders = [
    {
      name: "Deepak Gupta",
      role: "Partner",
      description:
        "Leads the strategic vision and operations of Veena Steel Traders with over the years of experience in the industry.",
    },
    {
      name: "Veena Gupta",
      role: "Partner",
      description:
        "Oversees business development and client relationships, bringing valuable insights to the company's growth and expansion.",
    },
  ];

  // Key Personnel data - using the provided data
  const keyPersonnel = [
    {
      name: "Prem Ranjan Kumar",
      role: "Finance Head",
      mobile: "+91 9771475402",
    },
    {
      name: "Daksh Kumar",
      role: "Administrator",
      mobile: "+91 9123241275",
    },
    {
      name: "Ved Prakash",
      role: "Logistics",
      mobile: "+91 9123241275",
    },
    {
      name: "Kameshwar Singh",
      role: "Logistics",
      mobile: "+91 9771475402",
    },
  ];

  // Section title component
  const SectionTitle = ({ title }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 opacity-100">
        <span className="bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="h-1 w-20 bg-blue-900 mx-auto transition-all duration-700 delay-200 opacity-100"></div>
    </div>
  );

  return (
    <section
      id="about"
      className="py-8 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div ref={sectionRef}>
          <SectionTitle title="About Veena Steel Traders" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col md:flex-row items-start md:items-center sm:items-center gap-6">
              {/* Certificate Image */}
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}>
                <img
                  src={certificateImage}
                  alt="Certificate"
                  className="rounded-lg shadow-xl w-[350px] h-[350px] object-contain bg-gray-100 transition-transform transform hover:scale-105"
                />
              </div>

              {/* ISO Certificate Image */}
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}>
                <img
                  src={isoCertificateImage}
                  alt="ISO Certificate"
                  className="rounded-lg shadow-xl w-[350px] h-[350px] object-contain bg-gray-100 transition-transform transform hover:scale-105"
                />
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 animate-slide-in-right"
                  : "opacity-0 translate-x-10"
              }`}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Your Trusted Partner in Steel and Iron
              </h3>
              <p className="text-black mb-6">
                Established with a vision to supply high-quality products, Veena
                Steel has emerged as a leading supplier of steel and iron in
                Jharkhand and surrounding regions.
              </p>
              <p className="text-black mb-6">
                We take pride in offering premium quality product that meet
                international quality standards. Our commitment to excellence
                and customer satisfaction has made us a preferred choice for
                construction companies, contractors, and industrial clients.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Quality Assurance",
                    desc: "All our products undergo rigorous quality checks.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "We ensure prompt delivery of orders.",
                  },
                  {
                    title: "Competitive Pricing",
                    desc: "Best quality products at competitive rates.",
                  },
                  {
                    title: "Expert Consultation",
                    desc: "Technical guidance for your specific needs.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 bg-opacity-50 p-4 rounded-lg border border-[#4B164C] backdrop-blur-sm hover:bg-blue-300 hover:bg-opacity-70 transition-all duration-300">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-black text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ventures Section */}
        <div
          ref={venturesRef}
          className="mt-20">
          <SectionTitle title="Our Ventures" />

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
              venturesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {ventures.map((venture, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">
                    {venture.name}
                  </h3>
                  <p className="text-blue-600 mb-4 text-sm font-medium">
                    {venture.location}
                  </p>
                  <p className="text-black">{venture.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholders Section */}
        <div
          ref={stakeholdersRef}
          className="mt-20">
          <SectionTitle title="Our Leadership" />

          <div
            className={`max-w-5xl mx-auto transition-all duration-700 ${
              stakeholdersVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {stakeholders.map((person, index) => (
              <div
                key={index}
                className={`bg-blue-50 rounded-lg p-6 mb-6 shadow-md border-l-4 border-blue-700 transition-all duration-500 hover:shadow-lg ${
                  index % 2 === 0
                    ? "transform hover:-translate-x-2"
                    : "transform hover:translate-x-2"
                }`}>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl border-2 border-blue-500">
                      {person.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800">
                      {person.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {person.role}
                    </p>
                    <p className="text-black">{person.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Personnel Section - using the same design as Leadership */}
        <div
          ref={personnelRef}
          className="mt-20 mb-12">
          <SectionTitle title="Key Personnel" />

          <div
            className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
              personnelVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {keyPersonnel.map((person, index) => (
              <div
                key={index}
                className={`bg-blue-50 rounded-lg p-6 shadow-md border-l-4 border-blue-700 transition-all duration-500 hover:shadow-lg ${
                  index % 2 === 0
                    ? "transform hover:-translate-x-2"
                    : "transform hover:translate-x-2"
                }`}>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl border-2 border-blue-500">
                      {person.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800">
                      {person.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {person.role}
                    </p>
                    <div className="flex items-center text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href={`tel:${person.mobile}`}
                        className="text-blue-800 hover:text-blue-600">
                        {person.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
