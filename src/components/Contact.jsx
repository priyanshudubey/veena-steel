"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format.";
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required.";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Invalid phone number.";
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-8 bg-white">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className="bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p
            className={`text-black max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            Have questions? We’d love to hear from you.
          </p>
          <div
            className={`h-1 w-20 bg-blue-900 mx-auto mt-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div
            className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 text-black">
              <div className="flex items-start">
                <Phone
                  className="text-blue-700 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-blue-700">Phone</p>
                  <a
                    href="tel:+919771475402"
                    className="text-black block">
                    +91 9771475402
                  </a>
                  <a
                    href="tel:+919123241275"
                    className="text-black block">
                    +91 9123241275
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaWhatsapp
                  className="text-blue-700 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-blue-700">WhatsApp</p>
                  <a
                    href="https://wa.me/919123241275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black">
                    +91 9123241275
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail
                  className="text-blue-700 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-blue-700">Email</p>
                  <a
                    href="mailto:info@vstbokaro.com"
                    className="text-black block">
                    info@vstbokaro.com
                  </a>
                  <a
                    href="mailto:veenasteel@gmail.com"
                    className="text-black block">
                    veenasteel@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin
                  className="text-blue-700 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-blue-700">Address</p>
                  <p>
                    Veena Steel Traders, Industrial Area, Bokaro, Jharkhand,
                    India, Pin - 827014
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 bg-white p-8 rounded-lg shadow-lg transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              Send a Message
            </h3>
            <form
              className="space-y-4"
              onSubmit={handleSubmit}>
              {["name", "email", "phone", "subject", "message"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium mb-1 text-blue-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    id={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-blue-600 rounded-md focus:ring-blue-700 focus:border-blue-800 text-black placeholder-gray-500"
                    placeholder={`Your ${field}`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-700">
            Find Us Here
          </h3>
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57499.63918521113!2d86.08410605551235!3d23.669296169526467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f42e769b6a8b55%3A0xb3d7e508a579cfe4!2sVeena%20Steels%20Bokaro!5e0!3m2!1sen!2sin!4v1709999999999"
            allowFullScreen
            loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
