import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AcademicsPage() {
  return (
    <>
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="relative w-full h-72">
        <Image
          src="/images/nursing2.png"
          alt="Academics Hero"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-green-900/50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Academics at Rivers State School of Nursing & Midwifery
          </h1>
          <p className="max-w-2xl text-sm md:text-base">
            Excellence in Medical Education, Research, and Patient-Centered Practice.
          </p>
        </div>
      </section>

      {/* 🔹 Intro Section */}
      <section className="py-16 px-6 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-6">
          Academic Excellence and Compassionate Healthcare Education
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Rivers State School of Nursing & Midwifery (RSN) is committed to building
          a new generation of compassionate, skilled, and innovative health professionals.
          Our academic structure integrates nursing, midwifery, public health, and biomedical sciences
          through hands-on clinical training, research, and community health outreach.
        </p>
      </section>

      {/* 🔹 Schools Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
            Our Academic Schools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* School of Nursing Sciences */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                School of Nursing Sciences (SONS)
              </h3>
              <p className="text-gray-700 mb-2">
                Departments: General Nursing, Community Health Nursing,
                Mental Health Nursing, Pediatric Nursing, Medical-Surgical Nursing.
              </p>
              <p className="text-sm text-gray-600">
                Focused on developing highly skilled nurses with compassion,
                clinical expertise, and leadership abilities to meet the healthcare
                needs of society.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore all of SONS →
              </Link>
            </div>

            {/* School of Midwifery */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                School of Midwifery (SOM)
              </h3>
              <p className="text-gray-700 mb-2">
                Departments: Maternal and Child Health, Reproductive Health,
                Clinical Midwifery, Neonatal Care.
              </p>
              <p className="text-sm text-gray-600">
                Training competent midwives capable of providing quality maternal
                and neonatal care through evidence-based practice.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore all of SOM →
              </Link>
            </div>

            {/* School of Allied Health Sciences */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                School of Allied Health Sciences (SAHS)
              </h3>
              <p className="text-gray-700 mb-2">
                Departments: Public Health, Medical Laboratory Science,
                Physiotherapy, Radiography, Nutrition & Dietetics.
              </p>
              <p className="text-sm text-gray-600">
                Providing a strong foundation in preventive and rehabilitative care
                with a focus on patient wellness and scientific innovation.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore all of SAHS →
              </Link>
            </div>

            {/* School of Biomedical & Basic Medical Sciences */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                School of Biomedical & Basic Medical Sciences (SBBMS)
              </h3>
              <p className="text-gray-700 mb-2">
                Departments: Human Anatomy, Human Physiology, Biochemistry,
                Pathology, Pharmacology.
              </p>
              <p className="text-sm text-gray-600">
                Equipping students with a deep understanding of human biology
                and preparing them for advanced studies and clinical practice.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore all of SBBMS →
              </Link>
            </div>

            {/* School of Public Health and Community Medicine */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                School of Public Health & Community Medicine (SPHCM)
              </h3>
              <p className="text-gray-700 mb-2">
                Departments: Epidemiology, Environmental Health,
                Health Promotion, Community Medicine.
              </p>
              <p className="text-sm text-gray-600">
                Promoting community-based health education, disease prevention,
                and public health leadership to improve population well-being.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore all of SPHCM →
              </Link>
            </div>

            {/* School of Medical Education and Research */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                School of Medical Education & Research (SMER)
              </h3>
              <p className="text-gray-700 mb-2">
                Departments: Medical Education, Nursing Leadership,
                Clinical Research & Evidence-Based Practice.
              </p>
              <p className="text-sm text-gray-600">
                Dedicated to improving medical education standards,
                fostering innovation, and promoting health research excellence.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore all of SMER →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Directorates and Institutes Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
            Directorates, Centers & Institutes
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Directorate of General Studies */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Directorate of General Studies (DGS)
              </h3>
              <p className="text-gray-700 mb-2">
                Offers foundational and interdisciplinary courses that prepare
                students for ethical leadership, effective communication, and social responsibility.
              </p>
              <p className="text-sm text-gray-600">
                Enhancing holistic development and professionalism across all healthcare disciplines.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore all of DGS →
              </Link>
            </div>

            {/* Institute of Human and Clinical Anatomy */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Institute of Human & Clinical Anatomy
              </h3>
              <p className="text-gray-700 mb-2">
                A center of excellence in anatomical education and research,
                advancing understanding of the human body through medical imaging and dissection studies.
              </p>
              <p className="text-sm text-gray-600">
                Supporting training for nurses, midwives, and other allied health professionals.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore Institute →
              </Link>
            </div>

            {/* Center for Medical Simulation & Skill Development */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Center for Medical Simulation & Skill Development (CMSSD)
              </h3>
              <p className="text-gray-700 mb-2">
                Enhancing learning through virtual labs and simulated patient experiences.
                Students practice clinical decision-making in a risk-free environment.
              </p>
              <p className="text-sm text-gray-600">
                Bridging theory and real-life healthcare practice.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore CMSSD →
              </Link>
            </div>

            {/* Center for Health Innovation & Nursing Leadership */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Center for Health Innovation & Nursing Leadership (CHINL)
              </h3>
              <p className="text-gray-700 mb-2">
                Promotes research, technology, and leadership in nursing practice.
                Encouraging entrepreneurship, digital health innovation, and sustainable care models.
              </p>
              <p className="text-sm text-gray-600">
                Empowering nurses and midwives to become changemakers in healthcare.
              </p>
              <Link
                href="#"
                className="inline-block mt-3 text-green-700 hover:underline font-medium"
              >
                Explore CHINL →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Academic Mission Section */}
      <section className="py-16 px-6 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Our Academic Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-100 mb-8 leading-relaxed">
          To deliver world-class education and research that empowers nurses,
          midwives, and allied health professionals with the competence,
          compassion, and commitment to transform lives and healthcare delivery globally.
        </p>
        <Link
          href="/admissions"
          className="bg-white text-green-800 px-6 py-3 rounded-md font-medium hover:bg-green-100 transition"
        >
          Apply for Admission
        </Link>
      </section>

      <Footer />
    </>
  );
}
