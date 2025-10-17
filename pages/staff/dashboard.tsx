"use client";
import { useEffect, useState } from "react";
import StaffLayout from "@/components/StaffLayout";
import { auth, db } from "@/firebase/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

interface Announcement {
  id: string;
  title: string;
  message: string;
  date: string;
}

interface Timetable {
  id: string;
  subject: string;
  day: string;
  time: string;
}

export default function Dashboard() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [timetable, setTimetable] = useState<Timetable[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setErrorMsg("User not logged in. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        // ✅ Fetch staff profile
        const profileRef = doc(db, "staff", user.uid);
        const profileSnap = await getDoc(profileRef);

        if (profileSnap.exists()) {
          setProfile(profileSnap.data());
        } else {
          setProfile(null);
          console.warn("No staff profile found for UID:", user.uid);
        }

        // ✅ Fetch announcements
        try {
          const announcementSnap = await getDocs(collection(db, "announcements"));
          const announcementsList = announcementSnap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Announcement[];
          setAnnouncements(announcementsList);
        } catch (annErr) {
          console.error("Error fetching announcements:", annErr);
          setAnnouncements([]);
        }

        // ✅ Fetch personalized timetable
        try {
          const timetableQuery = query(
            collection(db, "timetables"),
            where("staffId", "==", user.uid)
          );
          const timetableSnap = await getDocs(timetableQuery);
          const timetableList = timetableSnap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Timetable[];
          setTimetable(timetableList);
        } catch (ttErr) {
          console.error("Error fetching timetable:", ttErr);
          setTimetable([]);
        }

        setErrorMsg(null);
      } catch (err: any) {
        console.error("Dashboard Error:", err);
        setErrorMsg(err.message || "Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <StaffLayout>
        <div className="text-center text-green-800 mt-10 font-semibold animate-pulse">
          Loading dashboard...
        </div>
      </StaffLayout>
    );
  }

  if (errorMsg) {
    return (
      <StaffLayout>
        <div className="text-center text-red-600 mt-10 font-semibold">
          ⚠️ {errorMsg}
        </div>
      </StaffLayout>
    );
  }

  return (
    <StaffLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-green-800">
          Welcome, {profile?.name || "Staff"}
        </h1>

        {/* Announcements Section */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold text-lg mb-3 text-green-700">📢 Announcements</h2>
          {announcements.length > 0 ? (
            <ul className="space-y-2">
              {announcements.map((a) => (
                <li key={a.id} className="border-b pb-2">
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-sm text-gray-600">{a.message}</p>
                  <p className="text-xs text-gray-400">{a.date}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No announcements available.</p>
          )}
        </div>

        {/* Profile Section */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold text-lg mb-3 text-green-700">👤 Profile Summary</h2>
          {profile ? (
            <ul>
              <li><strong>Name:</strong> {profile.name}</li>
              <li><strong>Email:</strong> {profile.email}</li>
              <li><strong>Phone:</strong> {profile.phone}</li>
            </ul>
          ) : (
            <p className="text-gray-500">No profile data available.</p>
          )}
        </div>

        {/* Timetable Section */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold text-lg mb-3 text-green-700">📅 Upcoming Timetable</h2>
          {timetable.length > 0 ? (
            <ul className="space-y-2">
              {timetable.map((t) => (
                <li key={t.id} className="border-b pb-2">
                  <p className="font-semibold">{t.subject}</p>
                  <p className="text-sm text-gray-600">
                    {t.day} — {t.time}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No timetable assigned.</p>
          )}
        </div>
      </div>
    </StaffLayout>
  );
}
