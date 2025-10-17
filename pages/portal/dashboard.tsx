"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  User,
  LogOut,
  Award,
  Bell,
  CalendarDays,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const studentName = "Okafor Chinenye Assumpta";
  const department = "Nursing Science";
  const level = "300 Level";

  const handleLogout = () => {
    router.push("/portal");
  };

  return (
    <div className="min-h-screen flex bg-green-50 text-gray-800">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-green-900 text-white p-5 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-wide">RSN Portal</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white focus:outline-none"
          >
            ✖
          </button>
        </div>

        <nav className="flex flex-col gap-3 text-sm font-medium">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-green-800"
          >
            <LayoutDashboard size={18} /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-800/70"
          >
            <BookOpen size={18} /> Courses
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-800/70"
          >
            <Award size={18} /> Results
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-800/70"
          >
            <CreditCard size={18} /> Payments
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-800/70"
          >
            <CalendarDays size={18} /> Schedule
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-800/70"
          >
            <User size={18} /> Profile
          </a>

          <button
            onClick={handleLogout}
            className="mt-8 flex items-center gap-3 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 transition text-white"
          >
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white shadow p-4 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-green-900"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h2 className="text-xl font-semibold text-green-900">
              Dashboard Overview
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-green-800 cursor-pointer" />
            <div className="flex items-center gap-2">
              <Image
                src="/okafor.png"
                alt="Student"
                width={35}
                height={35}
                className="rounded-full border border-green-700"
              />
              <span className="font-medium text-green-900">
                {studentName.split(" ")[0]}
              </span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-green-50">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-green-900">
              Welcome, {studentName.split(" ")[0]} 👋
            </h1>
            <p className="text-gray-600 mt-1">
              {department} — {level}
            </p>
          </motion.div>

          {/* Stats / Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <StatCard title="GPA" value="3.84" color="green" />
            <StatCard title="Fees Balance" value="₦24,500" color="yellow" />
            <StatCard title="Active Courses" value="6" color="blue" />
            <StatCard title="Completed Units" value="72" color="purple" />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Academic Progress */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white p-6 rounded-xl shadow border-l-4 border-green-600"
              >
                <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <BarChart3 size={18} /> Academic Progress
                </h2>
                <Image
                  src="/pf.png"
                  alt="Performance Graph"
                  width={800}
                  height={300}
                  className="rounded-md w-full"
                />
              </motion.div>

              {/* Recent Announcements */}
              <section className="bg-white p-6 rounded-xl shadow border border-green-100">
                <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <Bell size={18} /> Recent Announcements
                </h2>
                <ul className="divide-y divide-gray-200">
                  <li className="py-3">
                    <p className="text-green-900 font-medium">
                      🗓️ Mid-Semester Exams Start Next Week
                    </p>
                    <p className="text-sm text-gray-500">
                      Ensure all tuition fees are cleared before exam week.
                    </p>
                  </li>
                  <li className="py-3">
                    <p className="text-green-900 font-medium">
                      💉 Clinical Posting for 300L Students
                    </p>
                    <p className="text-sm text-gray-500">
                      Rotation begins Monday, 14th October at RSUTH.
                    </p>
                  </li>
                  <li className="py-3">
                    <p className="text-green-900 font-medium">
                      🎓 Convocation Ceremony
                    </p>
                    <p className="text-sm text-gray-500">
                      Final-year students should collect gowns by Friday.
                    </p>
                  </li>
                </ul>
              </section>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Profile Summary */}
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-600 text-center">
                <Image
                  src="/okafor.png"
                  alt="Student"
                  width={100}
                  height={100}
                  className="mx-auto rounded-full border-4 border-green-600 mb-3"
                />
                <h3 className="text-lg font-semibold text-green-900">
                  {studentName}
                </h3>
                <p className="text-sm text-gray-500">{department}</p>
                <p className="text-sm text-gray-500">{level}</p>

                <div className="mt-4 flex justify-center gap-3">
                  <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 text-sm">
                    View Profile
                  </button>
                  <button className="bg-gray-200 text-green-800 px-4 py-1 rounded-md hover:bg-gray-300 text-sm">
                    Edit
                  </button>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-500">
                <h2 className="text-lg font-semibold text-yellow-700 mb-3 flex items-center gap-2">
                  <CreditCard size={18} /> Payment Summary
                </h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Tuition Fees:</span>
                    <strong>₦120,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Hostel Fees:</span>
                    <strong>₦35,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Paid:</span>
                    <strong className="text-green-600">₦130,500</strong>
                  </li>
                  <li className="flex justify-between border-t pt-2">
                    <span>Outstanding:</span>
                    <strong className="text-red-600">₦24,500</strong>
                  </li>
                </ul>
              </div>

              {/* Messages */}
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
                <h2 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
                  <MessageSquare size={18} /> Messages
                </h2>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong className="text-green-900">Course Adviser:</strong>{" "}
                    Meeting on Wednesday, 10AM.
                  </li>
                  <li>
                    <strong className="text-green-900">Admin:</strong> Hostel
                    allocation forms now available.
                  </li>
                  <li>
                    <strong className="text-green-900">Bursary:</strong> Bring
                    payment receipts for clearance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* --- Small helper card component --- */
const StatCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className={`bg-white p-6 rounded-xl shadow hover:shadow-md border-l-4 border-${color}-600`}
  >
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className={`text-3xl font-bold text-${color}-700 mt-2`}>{value}</p>
  </motion.div>
);
