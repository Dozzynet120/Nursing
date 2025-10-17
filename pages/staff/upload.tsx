// /pages/staff/upload.tsx
"use client";

import { useState, ChangeEvent } from "react";
import StaffLayout from "@/components/StaffLayout";

interface UploadItem {
  name: string;
  type: string;
  date: string;
}

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState("Lecture Notes");
  const [uploads, setUploads] = useState<UploadItem[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please select a file first!");

    const newUpload: UploadItem = {
      name: selectedFile.name,
      type: category,
      date: new Date().toLocaleString(),
    };

    setUploads([newUpload, ...uploads]);
    setSelectedFile(null);
    alert("File uploaded successfully!");
  };

  return (
    <StaffLayout>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-700">
          Upload Materials
        </h1>
        <p className="text-gray-700 text-center">
          Upload lecture notes, timetables, schedules, assignments, or exams for your students. 
          Ensure files are properly categorized for easy access.
        </p>

        {/* Upload Form */}
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
          <label className="block font-semibold text-gray-700">
            Select Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-2 mt-2 rounded"
            >
              <option value="Lecture Notes">Lecture Notes</option>
              <option value="Timetables">Timetables</option>
              <option value="Schedules">Schedules</option>
              <option value="Assignments">Assignments</option>
              <option value="Exams">Exams</option>
            </select>
          </label>

          <label className="block font-semibold text-gray-700">
            Select File
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border p-2 mt-2 rounded"
            />
          </label>

          <button
            onClick={handleUpload}
            className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors"
          >
            Upload File
          </button>
        </div>

        {/* Recent Uploads */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Uploads</h2>
          {uploads.length === 0 ? (
            <p className="text-gray-500">No uploads yet.</p>
          ) : (
            <ul className="space-y-2">
              {uploads.map((upload, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border p-2 rounded hover:bg-gray-50 transition"
                >
                  <div>
                    <p className="font-semibold">{upload.name}</p>
                    <p className="text-sm text-gray-500">
                      {upload.type} | {upload.date}
                    </p>
                  </div>
                  <button className="text-red-600 hover:underline">Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Info / Tips Section */}
        <div className="max-w-2xl mx-auto bg-green-50 p-6 rounded-lg shadow-inner">
          <h2 className="font-bold text-green-700 mb-2">Tips for Uploading:</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Ensure files are properly named for easy identification.</li>
            <li>Upload PDFs for lecture notes and timetables for consistency.</li>
            <li>Keep file sizes under 10MB for optimal performance.</li>
            <li>Regularly update assignments and schedules for students.</li>
          </ul>
        </div>
      </div>
    </StaffLayout>
  );
}
