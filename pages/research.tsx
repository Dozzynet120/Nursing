"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import Layout from "@/components/Layout"; // ✅ make sure this path matches your actual Layout file

export default function ResearchPage() {
  return (
    <Layout>
      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-64 md:h-80"
      >
        <Image
          src="/images/research.png"
          alt="RSN Research"
          fill
          className="object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-green-900/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide">
            RSN Research
          </h1>
        </div>
      </motion.div>

      {/* ✅ Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Research Grant */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-green-900">
            Research Grant
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Explore innovative research projects funded by external grants,
            featuring clear objectives, dedicated teams, and transformative
            outcomes.
          </p>
        </motion.section>

        {/* Students Research */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-green-900">
            Students Research
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Explore a curated selection of student-led projects across various
            disciplines and levels of study, highlighting diverse research
            topics, collaborative efforts, and impactful scholarly outputs.
          </p>
        </motion.section>

        {/* Research Products */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-green-900">
            Research Products
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Showcasing innovation and creativity, this section highlights the
            ingenuity of RSN’s students and staff. Discover groundbreaking
            solutions, prototypes, and creations shaping industries and advancing
            technology.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Drone Project */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <Image
                src="/images/drone.jpg"
                alt="Students Unveil Innovative Drone"
                width={500}
                height={300}
                className="rounded-lg mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg text-green-900">
                Students Unveil Innovative Drone
              </h3>
            </motion.div>

            {/* EV Competition */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <Image
                src="/images/na.jpg"
                alt="National Electric Vehicle Competition"
                width={500}
                height={300}
                className="rounded-lg mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg text-green-900">
                RSN participates in the National Electric Vehicle Competition
              </h3>
            </motion.div>

            {/* WHO Meeting */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition md:col-span-2"
            >
              <Image
                src="/images/cr.jpg"
                alt="Crowdsourced Image-Based Morbidity Hotspot Surveillance for NTDs"
                width={1000}
                height={400}
                className="rounded-lg mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg text-green-900">
                Crowdsourced Image-Based Morbidity Hotspot Surveillance for NTDs
                (CIMS-NTDs) Presented at WHO Global Meeting
              </h3>
            </motion.div>
          </div>
        </motion.section>

        {/* Research Facilities */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-green-900">
            Research Facilities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our research facilities offer a state-of-the-art environment that
            fosters academic excellence and innovative discovery. Equipped with
            advanced laboratories, cutting-edge instrumentation, and modern
            learning spaces, they empower students and faculty to engage in
            hands-on research and collaborative projects.
          </p>

          <div className="flex justify-center">
            <a
              href="/files/case.pdf"
              download
              className="flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              <FileDown className="w-5 h-5" />
              Download Research Report
            </a>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}
