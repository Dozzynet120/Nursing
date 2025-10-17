import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* 🔹 Top Info Bar */}
      <div className="bg-green-800 text-green-100 text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center px-4 gap-3">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <Link href="/institutioal-data" className="hover:text-white">Key Institutional Data</Link>
            <Link href="/admissions" className="hover:text-white">RSN Admission List</Link>
            <Link href="/news" className="hover:text-white">News</Link>
            <a
  href="https://nuc.edu.ng"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white"
>
  NUC
</a>

           <a
  href="https://tetfund.gov.ng"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white"
>
  Tetfund
</a>

            <Link href="/calendar-and-transcript" className="hover:text-white">Transcript</Link>
            <Link href="/calendar-and-transcript" className="hover:text-white">Academic Calendar</Link>
            <Link href="/contact" className="hover:text-white">Email</Link>
            <Link href="/alumni" className="hover:text-white">Alumni</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
            <Link href="/staff/login" className="hover:text-white">Staff Portal</Link>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="bg-green-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="RSN Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
            <span className="text-lg font-semibold leading-tight">
              River State School of <br /> Nursing & Midwifery
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-green-300 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-300 transition">
              About
            </Link>
            <Link href="/admissions" className="hover:text-green-300 transition">
              Admissions
            </Link>
            <Link href="/academics" className="hover:text-green-300 transition">
              Academics
            </Link>
            <Link href="/news" className="hover:text-green-300 transition">
              News
            </Link>
            <Link href="/contact" className="hover:text-green-300 transition">
              Contact
            </Link>
            <Link
              href="/portal"
              className="bg-green-600 px-4 py-1.5 rounded-md hover:bg-green-700 transition"
            >
              Portal Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-green-800 py-3 flex flex-col space-y-2 text-center">
            <Link href="/" className="hover:text-green-300" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-green-300" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/admissions" className="hover:text-green-300" onClick={() => setMenuOpen(false)}>
              Admissions
            </Link>
            <Link href="/academics" className="hover:text-green-300" onClick={() => setMenuOpen(false)}>
              Academics
            </Link>
            <Link href="/news" className="hover:text-green-300" onClick={() => setMenuOpen(false)}>
              News
            </Link>
            <Link href="/contact" className="hover:text-green-300" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="/portal"
              className="bg-green-600 mx-10 py-2 rounded-md hover:bg-green-700"
              onClick={() => setMenuOpen(false)}
            >
              Portal Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
