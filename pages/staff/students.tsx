"use client";
import { useEffect, useState, ChangeEvent } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Student {
  id: string;
  name: string;
  email: string;
  program: string;
}

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [filtered, setFiltered] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // students per page

  // Fetch students from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      const snap = await getDocs(collection(db, "students"));
      const list: Student[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Student, "id">),
      }));
      setStudents(list);
      setFiltered(list);
    };
    fetchStudents();
  }, []);

  // Handle search input
  useEffect(() => {
    const lower = search.toLowerCase();
    const filteredList = students.filter(
      (s) =>
        s.name.toLowerCase().includes(lower) ||
        s.email.toLowerCase().includes(lower) ||
        s.program.toLowerCase().includes(lower)
    );
    setFiltered(filteredList);
    setCurrentPage(1); // reset to first page on search
  }, [search, students]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const currentData = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const downloadCSV = () => {
    const header = ["Name", "Email", "Department"];
    const rows = filtered.map((s) => [s.name, s.email, s.program]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "students.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Students List</h2>

      {/* Search & CSV */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name, email, or department"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <button
          onClick={downloadCSV}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Download CSV
        </button>
      </div>

      {/* Students Table */}
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Department</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center p-4 text-gray-500">
                No students found.
              </td>
            </tr>
          ) : (
            currentData.map((s) => (
              <tr key={s.id}>
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.email}</td>
                <td className="border p-2">{s.program}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 border rounded ${
                currentPage === num ? "bg-green-700 text-white" : "hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
