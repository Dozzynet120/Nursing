"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
      >
        Welcome to River State School of Nursing & Midwifery
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-white mt-4 text-lg md:text-xl"
      >
        Training the next generation of professional nurses and midwives
      </motion.p>

      <div className="mt-8 space-x-4">
        <Link
          href="/apply"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Apply Now
        </Link>
        <Link
          href="/login"
          className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100"
        >
          Student Login
        </Link>
      </div>
    </section>
  );
}
