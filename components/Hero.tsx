"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  // ===== Slider Logic =====
  const images = [
    "/images/gate1.png",
    "/images/nursing2.png",
    "/images/nursing3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col">
      {/* ===== HERO SECTION WITH SLIDER ===== */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Image Slider */}
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white px-6 max-w-2xl">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Empowering the Future of Nursing & Midwifery
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl mb-6 text-gray-200"
          >
            Dedicated to excellence in healthcare education, compassion, and
            professional service to humanity.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link
              href="/apply"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex space-x-3 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === i ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ===== ABOUT US SECTION ===== */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/nursing2.png"
              alt="About Nursing and Midwifery"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Rivers State School of Nursing & Midwifery stands as a beacon
              of academic excellence and compassion, committed to producing
              skilled, empathetic, and disciplined healthcare professionals.
              Our institution nurtures both intellectual and emotional growth,
              ensuring that every student graduates with the competence and
              heart to serve humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== MISSION, VISION & GOALS ===== */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Mission, Vision & Goals
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Guiding our journey toward excellence in nursing and midwifery
            education with purpose, dedication, and service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-green-600 text-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-100">
              To be a globally recognized institution producing exceptional
              nurses and midwives who are competent, compassionate, and committed
              to delivering quality healthcare.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-orange-500 text-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-100">
              To educate and inspire a new generation of nursing and midwifery
              professionals through innovation, hands-on training, and moral
              integrity in the pursuit of global health standards.
            </p>
          </motion.div>

          {/* Objective / Goal Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#7B1E3C] text-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">Our Objective</h3>
            <p className="text-gray-100">
              To foster academic excellence, practical competence, and ethical
              discipline that empower our graduates to lead with compassion and
              deliver outstanding patient-centered care worldwide.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
