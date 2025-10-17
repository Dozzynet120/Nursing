"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileDown,
  CalendarDays,
  BookOpen,
  CheckCircle2,
  Phone,
  PenSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-64 md:h-80"
      >
        <Image
          src="/images/rita.png"
          alt="RSN Admission"
          layout="fill"
          objectFit="cover"
          className="rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide">
            Admission
          </h1>
        </div>
      </motion.div>

      {/* ✅ Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex-grow space-y-16">
        {/* ✅ Introduction */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Start Your Journey With RSN
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            The Rivers State School of Nursing and Midwifery (RSN) welcomes
            aspiring nurses and midwives to a community built on excellence,
            compassion, and innovation. Join us to build a rewarding career in
            healthcare and become a part of the next generation of health leaders.
          </p>
        </section>

        {/* ✅ Programs Section */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
            Available Programmes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">🩺 Basic Nursing Programme</h3>
              <p>
                A three-year program designed to train students to become
                Registered Nurses (RNs) equipped with clinical, ethical, and
                leadership skills.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🤱 Basic Midwifery Programme</h3>
              <p>
                A three-year program focused on equipping learners with
                specialized knowledge in maternal and neonatal healthcare.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🎓 Post Basic Nursing</h3>
              <p>
                A one-year professional program for Registered Midwives seeking
                to advance their qualifications in general nursing practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">💉 Community Nursing Programme</h3>
              <p>
                A program designed to train nurses for effective community
                healthcare delivery, emphasizing rural and primary health systems.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Admission Requirements */}
        <section className="py-8 bg-green-50 rounded-2xl shadow-inner">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
            Admission Requirements
          </h2>
          <ul className="max-w-3xl mx-auto text-gray-700 space-y-3 list-disc list-inside">
            <li>
              Applicants must possess a minimum of five (5) credits in WAEC, NECO, or NABTEB
              including English, Mathematics, Biology, Chemistry, and Physics — not more than
              two sittings.
            </li>
            <li>Applicants must be between 17 and 35 years of age.</li>
            <li>
              Applicants are required to sit and pass the RSN entrance examination and oral
              interview.
            </li>
            <li>Applicants must be physically and mentally fit for training.</li>
          </ul>
        </section>

        {/* ✅ Admission Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
            Admission Process Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: (
                  <CalendarDays className="w-10 h-10 mx-auto text-green-700 mb-2" />
                ),
                title: "Application Opens",
                desc: "April - June",
              },
              {
                icon: (
                  <BookOpen className="w-10 h-10 mx-auto text-green-700 mb-2" />
                ),
                title: "Entrance Exam",
                desc: "July",
              },
              {
                icon: (
                  <CheckCircle2 className="w-10 h-10 mx-auto text-green-700 mb-2" />
                ),
                title: "Interview & Screening",
                desc: "August",
              },
              {
                icon: (
                  <FileDown className="w-10 h-10 mx-auto text-green-700 mb-2" />
                ),
                title: "Admission List Released",
                desc: "September",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg"
              >
                {step.icon}
                <h3 className="text-lg font-semibold text-green-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ Apply Section */}
        <section className="text-center py-12 bg-white shadow-md rounded-2xl">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            How to Apply
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-6">
            Admission forms are obtainable at the Rivers State School of Nursing
            and Midwifery campus or can be downloaded online. Ensure all forms
            are filled correctly and submitted before the deadline.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/downloads/RSN_Admission_Form.pdf"
              className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition"
            >
              <FileDown className="mr-2 w-5 h-5" /> Download Admission Form
            </Link>

            {/* ✅ Apply Here Button */}
            <Link
              href="/apply"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              <PenSquare className="mr-2 w-5 h-5" /> Apply Here
            </Link>
          </div>
        </section>

        {/* ✅ Contact Section */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Need Assistance?
          </h2>
          <p className="text-gray-700 mb-2">
            For inquiries or guidance on the admission process, contact our
            admission office:
          </p>
          <p className="text-gray-800 font-medium flex justify-center items-center gap-2">
            <Phone className="w-5 h-5 text-green-700" /> +234 805 123 4567 | info@rsn.edu.ng
          </p>
        </section>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
