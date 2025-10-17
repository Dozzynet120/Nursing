"use client";
import { useState, useEffect } from "react";
import { db, auth } from "@/firebase/config";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Attendance() {
  const [status, setStatus] = useState("present");
  const [hasMarked, setHasMarked] = useState(false);

  useEffect(() => {
    const checkAttendance = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0); // start of today
      const todayEnd = new Date();
      todayEnd.setHours(23, 59, 59, 999); // end of today

      const q = query(
        collection(db, "attendance"),
        where("staffId", "==", user.uid),
        where("date", ">=", Timestamp.fromDate(todayStart)),
        where("date", "<=", Timestamp.fromDate(todayEnd))
      );

      const snapshot = await getDocs(q);
      if (!snapshot.empty) setHasMarked(true);
    };

    checkAttendance();
  }, []);

  const markAttendance = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to mark attendance.");
      return;
    }

    if (hasMarked) {
      alert("You have already marked your attendance for today.");
      return;
    }

    try {
      await addDoc(collection(db, "attendance"), {
        staffId: user.uid,
        date: Timestamp.now(),
        status,
      });
      setHasMarked(true);
      alert("Attendance recorded!");
    } catch (error: any) {
      console.error("Error marking attendance:", error);
      alert("Failed to mark attendance. " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>
      {hasMarked ? (
        <p className="text-green-700 font-semibold mb-4">
          You have already marked your attendance for today.
        </p>
      ) : (
        <>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 mb-4 w-full rounded"
          >
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
          <button
            onClick={markAttendance}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
