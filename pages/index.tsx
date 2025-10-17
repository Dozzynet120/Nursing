import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* Academics */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          Academic Excellence
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Nursing Program", img: "/images/np.png" },
            { title: "Midwifery Program", img: "/images/mp1.png" },
            { title: "Continuing Education", img: "/images/ce.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-green-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg text-green-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Learn more about our {item.title.toLowerCase()} designed to shape tomorrow’s leaders in healthcare.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 px-6 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          News & Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "ADVERTISEMENT FOR 2025/2026 RSN POST-UTME SCREENING EXERCISE FOR SUPPLEMENTARY ADMISSION",
              date: "26 Sept 2025",
              img: "/images/logo.png",
            },
            {
              title: "Postgraduate Admissions for 2025/2026 Academic Session",
              desc: "The Postgraduate School of the River State School of Nursing & Midwifery invites applications from suitably qualified candidates for admission into full-time and part-time postgraduate programmes for the 2025/2026 academic session.",
              date: "29 Aug 2025",
              img: "/images/adm.png",
            },
            {
              title: "RSN and Hope Foundation Partner to Empower Students with Career-Ready Skills",
              desc: "RSN takes a proactive step towards preparing students for post-graduation success through a career planning and leadership workshop.",
              date: "9 Aug 2025",
              img: "/images/f.png",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-green-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
         <Link href="/news" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition">
          See More News
        </Link>
        </div>
      </section>

      {/* Key Institutional Data */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          Key Institutional Data
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-green-800 mb-2">Research Grant Revenue (2025)</h3>
            <p className="text-gray-600">Foreign: ₦7,579,597,562.00</p>
            <p className="text-gray-600">Local: ₦113,566,666.00</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-green-800 mb-2">Annual Budget Allocation (2025)</h3>
            <p className="text-gray-600">Personnel: ₦17,552,560,868</p>
            <p className="text-gray-600">Overhead: ₦457,500,360</p>
            <p className="text-gray-600">Capital: ₦1,943,518,264</p>
            <p className="font-semibold text-green-900 mt-2">Total: ₦19,953,579,492</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-green-800 mb-2">Tetfund Allocation (2025)</h3>
            <p className="text-gray-600">Total: ₦2,249,037,011</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link href="/institutional-data" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition">
          See More Data
        </Link>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 px-6 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          Our Products
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10">
          Showcasing innovation and creativity, this section highlights the ingenuity of RSN’s students and staff. Discover groundbreaking solutions, prototypes, and creations shaping healthcare and medical education.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Students Unveil Innovative Drone", img: "/images/dd.png" },
            { title: "RSN participates in National Health Simulation Challenge", img: "/images/na.jpg" },
            { title: "Research Project on Community Health Digitization", img: "/images/cr.jpg" },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-green-900 text-lg mb-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research and Around RSN */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Research and Research Facilities</h2>
        <Link href="/research" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition">
          See More Research 
        </Link>
      </section>

      <section className="py-16 px-6 bg-green-50 text-center md:text-left">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
    {/* Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center md:text-left">
        Around RSN
      </h2>
      <p className="text-gray-700 mb-10">
        Explore the vibrant life Around RSN! From scenic landscapes to bustling
        cultural activities, experience the energy that surrounds River State
        School of Nursing & Midwifery.
      </p>
      <Link
        href="/gallery1"
        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition"
      >
        Start Tour
      </Link>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <Image
        src="/images/gate.png"
        alt="Around RSN"
        width={500}
        height={350}
        className="rounded-xl shadow-md object-cover"
      />
    </div>
  </div>
</section>


      {/* Community Impact */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">Community Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "The Future of Healthcare: Modern Nursing Techniques Workshop", img: "/images/com.png" },
            { title: "Health Outreach Program at Eleme Village", img: "/images/el.png" },
            { title: "Community Visit and Maternal Care Initiative", img: "/images/h.png" },
            { title: "Clean Water Project Phase 2: RSN Student Initiative", img: "/images/water.jpg" },
          ].map((item, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-green-900 font-semibold text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}

{/* Full Gallery Section */}
<section className="py-16 px-6 bg-green-50 text-center">
  <h2 className="text-3xl font-bold text-green-900 mb-8">Gallery</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {[
      "/images/1.webp",
      "/images/2.webp",
      "/images/3.webp",
      "/images/13.webp",
      "/images/5.jpeg",
      "/images/6.jpeg",
      "/images/14.webp",
      "/images/8.jpeg",
      "/images/9.webp",
      "/images/10.webp",
      "/images/11.webp",
      "/images/12.webp",
    ].map((src, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white"
      >
        <Image
          src={src}
          alt={`Gallery image ${index + 1}`}
          width={400}
          height={300}
          className="w-full h-56 object-cover"
        />
      </div>
    ))}
  </div>
</section>


      {/* Job Vacancies */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-10">Job Vacancies at RSN</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-green-50 p-6 rounded-lg shadow text-left">
            <h3 className="font-semibold text-green-800 text-lg">
              Vacancy for the Position of Bursar
            </h3>
            <p className="text-gray-600 text-sm">Non-Academic | June 4, 2025</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow text-left">
            <h3 className="font-semibold text-green-800 text-lg">
              Vacancy for the Position of ICT Banking Officer
            </h3>
            <p className="text-gray-600 text-sm">Non-Academic | June 4, 2025</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="text-gray-200 mb-6">
          Join the next generation of healthcare professionals at River State School of Nursing & Midwifery.
        </p>
        <a
          href="/admissions"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition"
        >
          Apply Now
        </a>
      </section>
    </Layout>
  );
}
