"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  GraduationCap,
  DollarSign,
  Landmark,
  Briefcase,
  PieChart,
  BarChart3,
  Building2,
  FileDown,
} from "lucide-react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// ===== MAIN PAGE =====
export default function InstitutionalDataPage() {
  const images = ["/images/gate.png", "/images/gate1.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* ===== Hero Slider ===== */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt="RSN campus"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Slider dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === currentIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Header ===== */}
      <section className="text-center py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Key Institutional Data
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore detailed insights into RSN’s budget allocations, research funding,
          endowments, and student demographics.
        </p>
      </section>

      {/* ===== Year Sections ===== */}
      <main className="flex-grow max-w-6xl mx-auto px-6 space-y-16 pb-20">
        <YearSection
          year="2025"
          tetfund="₦2,249,037,011"
          endowment="₦50,000,000"
          foreignGrant="₦7,579,597,562.00"
          localGrant="₦113,566,666.00"
          undergrad="24,857"
          postgrad="252"
          personnel="₦17,552,560,868"
          overhead="₦457,500,360"
          capital="₦1,943,518,264"
          total="₦19,953,579,492"
        />

        <YearSection
          year="2024"
          tetfund="₦2,249,037,011"
          foreignGrant="₦7,819,597,562.00"
          localGrant="₦272,565,026.06"
          undergrad="24,961"
          postgrad="97"
          personnel="₦15,641,134,101"
          overhead="₦239,106,246"
          capital="₦962,462,648"
          total="₦16,842,702,995"
        />

        <YearSection
          year="2023"
          tetfund="₦1,123,050,969"
          foreignGrant="₦5,680,000,000.00"
          localGrant="₦356,699,380.56"
          undergrad="24,109"
          postgrad="63"
          personnel="₦12,346,639,926"
          overhead="₦154,489,699"
          capital="₦390,255,714"
          total="₦12,891,355,339"
          graduates="47,959"
        />
      </main>

      <Footer />
    </div>
  );
}

// ===== REUSABLE YEAR SECTION =====
interface YearProps {
  year: string;
  tetfund: string;
  endowment?: string;
  foreignGrant: string;
  localGrant: string;
  undergrad: string;
  postgrad: string;
  personnel: string;
  overhead: string;
  capital: string;
  total: string;
  graduates?: string;
}

const YearSection: React.FC<YearProps> = ({
  year,
  tetfund,
  endowment,
  foreignGrant,
  localGrant,
  undergrad,
  postgrad,
  personnel,
  overhead,
  capital,
  total,
  graduates,
}) => {
  const chartData = [
    { name: "Personnel", value: Number(personnel.replace(/[₦,]/g, "")) },
    { name: "Overhead", value: Number(overhead.replace(/[₦,]/g, "")) },
    { name: "Capital", value: Number(capital.replace(/[₦,]/g, "")) },
  ];

  const COLORS = ["#3cce10ff", "#3cce10ff", "#3cce10ff"];

  const handleDownloadChart = () => {
    const svg = document.querySelector(`#chart-${year} svg`);
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `RSN_Data_${year}.svg`;
    link.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-md p-8"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-green-700">
          Institutional Data for {year}
        </h2>
        <button
          onClick={handleDownloadChart}
          className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <FileDown size={18} /> Download Chart
        </button>
      </div>

      <p className="text-gray-600 mb-6">
        Key statistics and financials for the year {year} at RSN, including budget,
        grants, endowments, and student population.
      </p>

      {/* Data Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <DataCard title="Tetfund Allocation" value={tetfund} icon={<Landmark />} />
        {endowment && endowment !== "ₙ/ₐ" && (
          <DataCard title="Endowment Fund" value={endowment} icon={<PieChart />} />
        )}
        <DataCard
          title="Research Grant (Foreign)"
          value={foreignGrant}
          icon={<DollarSign />}
        />
        <DataCard
          title="Research Grant (Local)"
          value={localGrant}
          icon={<BarChart3 />}
        />
        <DataCard
          title="Undergraduate Students"
          value={undergrad}
          icon={<Users />}
        />
        <DataCard
          title="Postgraduate Students"
          value={postgrad}
          icon={<GraduationCap />}
        />
        <DataCard title="Personnel Costs" value={personnel} icon={<Briefcase />} />
        <DataCard title="Overhead Costs" value={overhead} icon={<Building2 />} />
        <DataCard
          title="Capital Expenditure"
          value={capital}
          icon={<PieChart />}
        />
        <DataCard title="Total Allocation" value={total} icon={<DollarSign />} />
        {graduates && (
          <DataCard
            title="Total Graduated Students"
            value={graduates}
            icon={<GraduationCap />}
          />
        )}
      </div>

      {/* Charts */}
      <div id={`chart-${year}`} className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Bar Chart */}
        <div className="h-72 bg-gray-50 rounded-xl shadow-inner p-4">
          <ResponsiveContainer width="100%" height="100%">
            <ReBarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3cce10ff" />
            </ReBarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="h-72 bg-gray-50 rounded-xl shadow-inner p-4">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {chartData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  );
};

// ===== CARD COMPONENT =====
interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DataCard: React.FC<CardProps> = ({ title, value, icon }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="border border-gray-100 rounded-2xl p-5 bg-gray-50 hover:bg-green-50 transition"
  >
    <div className="flex items-center gap-3 mb-1 text-green-600">
      {icon}
      <h3 className="text-gray-700 font-semibold">{title}</h3>
    </div>
    <p className="text-xl font-bold text-green-700">{value}</p>
  </motion.div>
);
