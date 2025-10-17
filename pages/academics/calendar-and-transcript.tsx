"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, FileText, Calendar } from "lucide-react";

export default function AcademicPage() {
  const [selectedSemester, setSelectedSemester] = useState("First Semester");

  const academicEvents = [
    {
      date: "Jan 15, 2025",
      event: "First Semester Resumption & Registration Begins",
    },
    {
      date: "Feb 10, 2025",
      event: "Lectures Commence",
    },
    {
      date: "Apr 15–19, 2025",
      event: "Mid-Semester Break",
    },
    {
      date: "Jun 3, 2025",
      event: "First Semester Exams Begin",
    },
    {
      date: "Jul 1, 2025",
      event: "First Semester Ends",
    },
    {
      date: "Sept 1, 2025",
      event: "Second Semester Resumption",
    },
  ];

  const transcriptData = [
    { courseCode: "CSC101", courseTitle: "Introduction to Programming", grade: "A", unit: 3 },
    { courseCode: "MTH102", courseTitle: "Discrete Mathematics", grade: "B+", unit: 3 },
    { courseCode: "GST103", courseTitle: "Use of English", grade: "A", unit: 2 },
    { courseCode: "PHY104", courseTitle: "Computer Hardware Fundamentals", grade: "B", unit: 3 },
  ];

  const calculateGPA = () => {
    const gradePoints: Record<string, number> = { A: 5, "B+": 4.5, B: 4, "C+": 3.5, C: 3 };
    const totalUnits = transcriptData.reduce((acc, c) => acc + c.unit, 0);
    const totalPoints = transcriptData.reduce((acc, c) => acc + (gradePoints[c.grade] || 0) * c.unit, 0);
    return (totalPoints / totalUnits).toFixed(2);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
          Academic Calendar & Transcript
        </h1>

        {/* === Academic Calendar Section === */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
              <Calendar className="text-green-700" /> Academic Calendar (2024/2025)
            </h2>
            <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              <Download size={16} /> Download PDF
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base border border-gray-200 rounded-lg">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Event</th>
                </tr>
              </thead>
              <tbody>
                {academicEvents.map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-green-50">
                    <td className="py-2 px-4">{item.date}</td>
                    <td className="py-2 px-4">{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* === Transcript Section === */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
              <FileText className="text-green-700" /> Student Transcript
            </h2>
            <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              <Download size={16} /> Download Transcript
            </button>
          </div>

          {/* GPA Info */}
          <div className="mb-4 text-gray-700">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Matric No:</strong> FUTO/CSC/2021/001</p>
            <p><strong>Program:</strong> B.Sc. Computer Science</p>
            <p><strong>Current GPA:</strong> {calculateGPA()}</p>
          </div>

          {/* Transcript Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Course Code</th>
                  <th className="py-3 px-4 text-left">Course Title</th>
                  <th className="py-3 px-4 text-left">Grade</th>
                  <th className="py-3 px-4 text-left">Unit</th>
                </tr>
              </thead>
              <tbody>
                {transcriptData.map((course, idx) => (
                  <tr key={idx} className="border-b hover:bg-green-50">
                    <td className="py-2 px-4">{course.courseCode}</td>
                    <td className="py-2 px-4">{course.courseTitle}</td>
                    <td className="py-2 px-4">{course.grade}</td>
                    <td className="py-2 px-4">{course.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Request Form */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Request Official Transcript</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded"
              />
              <textarea
                placeholder="Reason for Request or Delivery Address"
                className="w-full border p-2 rounded h-24"
              ></textarea>
              <button
                type="submit"
                className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
