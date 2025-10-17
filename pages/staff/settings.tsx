"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/config";

interface StaffProfile {
  name: string;
  email: string;
  phone: string;
}

export default function StaffSettingsPage() {
  const [profile, setProfile] = useState<StaffProfile>({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in to access settings.");
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "staff", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setProfile(snap.data() as StaffProfile);
        } else {
          alert("Profile not found.");
        }
      } catch (error: any) {
        console.error("Error fetching profile:", error);
        alert("Failed to fetch profile: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to update your profile.");
      return;
    }

    try {
      const ref = doc(db, "staff", user.uid);
      await updateDoc(ref, { ...profile } as Record<string, any>);
      alert("Profile updated successfully!");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile: " + error.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Profile</h2>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="text"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full border p-2 mb-3 rounded"
      />
      <button
        onClick={handleSave}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Save Changes
      </button>
    </div>
  );
}
