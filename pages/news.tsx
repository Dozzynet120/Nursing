"use client";

import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function NewsPage() {
  // News data
  const newsItems = [
    {
      id: 1,
      title:
        "ADVERTISEMENT FOR 2025/2026 RSN POST-UTME SCREENING EXERCISE FOR SUPPLEMENTARY ADMISSION",
      description:
        "Rivers State School of Nursing and Midwifery invites applications from qualified candidates for supplementary admission into the 2025/2026 academic session.",
      date: "26 Sept 2025",
      image: "/images/post.png",
    },
    {
      id: 2,
      title: "Postgraduate Admissions for 2025/2026 Academic Session",
      description:
        "The Postgraduate School invites applications for admission into full-time and part-time postgraduate programmes for the 2025/2026 academic session.",
      date: "29 Aug 2025",
      image: "/images/2.png",
    },
    {
      id: 3,
      title: "RSN Partners with Health Foundation to Empower Students",
      description:
        "RSN has taken proactive steps to prepare students for healthcare leadership by co-hosting a one-day training workshop focused on nursing innovation and leadership.",
      date: "9 Aug 2025",
      image: "/images/3.png",
    },
    {
      id: 4,
      title:
        "RSN Shines at National Nursing Competition, Wins Best Innovation Award",
      description:
        "Rivers State School of Nursing, Port Harcourt, showcased excellence at the National Nursing Innovation Challenge, securing the Best Local Content Award.",
      date: "30 Jul 2025",
      image: "/images/4.png",
    },
    {
      id: 5,
      title:
        "ADVERTISEMENT FOR 2025/2026 RSN DIRECT ENTRY SCREENING EXERCISE",
      description:
        "Applications are invited for Direct Entry Admission into RSN’s 2025/2026 academic session.",
      date: "22 Jul 2025",
      image: "/images/n2.webp",
    },
    {
      id: 6,
      title: "RSN Opens JUPEB Admission Programme for 2025/2026",
      description:
        "RSN announces the commencement of the Joint Universities Preliminary Examinations Board (JUPEB) Programme for the 2025/2026 academic session.",
      date: "9 Jul 2025",
      image: "/images/n3.jpg",
    },
    {
      id: 7,
      title:
        "RSN Inaugurates Anti-Corruption and Transparency Unit to Promote Integrity",
      description:
        "The inauguration of RSN’s Anti-Corruption Unit marks a milestone in the institution’s commitment to transparency and accountability.",
      date: "4 Jul 2025",
      image: "/images/n1.jpeg",
    },
    {
      id: 8,
      title:
        "RSN Champions Africa’s Health Innovation with Research and Training",
      description:
        "Through advanced research and training programs, RSN continues to lead innovations in public health and nursing excellence.",
      date: "12 Jun 2025",
      image: "/images/c.png",
    },
    {
      id: 9,
      title: "RSN to Host 5th International Congress on Nursing and Midwifery",
      description:
        "RSN, Port Harcourt, will host the 5th International Congress on Nursing and Midwifery — a platform for global collaboration and research sharing.",
      date: "3 Jun 2025",
      image: "/images/n4.jpg",
    },
    {
      id: 10,
      title: "RSN Strengthens Ties with International Nursing Universities",
      description:
        "RSN signs a new MoU with Chongqing University to foster research collaborations in nursing, maternal health, and innovation.",
      date: "1 Jun 2025",
      image: "/images/nu.png",
    },
    {
      id: 11,
      title:
        "NCC Commissions Cutting-Edge ICT Hub at RSN to Boost Digital Learning",
      description:
        "The Nigerian Communications Commission has commissioned a state-of-the-art ICT hub at RSN to support digital education in nursing.",
      date: "30 May 2025",
      image: "/images/ictpark.jpg",
    },
    {
      id: 12,
      title:
        "AI Experience Center Launches at RSN to Drive Innovation in Health Technology",
      description:
        "The AI Experience Center at RSN enhances research, training, and partnerships — positioning the school as a hub for digital transformation in health.",
      date: "26 May 2025",
      image: "/images/ai.png",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-900 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-3">Latest News</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Stay updated with the latest happenings at Rivers State School of
          Nursing & Midwifery, Port Harcourt.
        </p>
      </section>

      {/* Top Banner and Search */}
      <div className="max-w-6xl mx-auto mt-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/gate.png"
            alt="News Banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Search Bar + Button */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Search News
          </h2>
          <div className="flex items-center border border-green-400 rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 outline-none"
            />
            <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 font-medium transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Job Vacancies Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-10">
          Job Vacancies at RSN
        </h2>
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
    </Layout>
  );
}
