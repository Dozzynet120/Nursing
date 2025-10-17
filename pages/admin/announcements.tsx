"use client";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useRouter } from "next/router";

export default function AdminAnnouncements() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !message.trim()) {
      setFeedback("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "announcements"), {
        title,
        message,
        date: new Date().toLocaleDateString(),
        createdAt: serverTimestamp(),
      });

      setFeedback("✅ Announcement posted successfully!");
      setTitle("");
      setMessage("");
    } catch (error) {
      console.error("Error adding announcement:", error);
      setFeedback("❌ Failed to post announcement. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-6 text-green-800 text-center">
          Admin: Post Announcement
        </h2>

        {feedback && (
          <p
            className={`text-center mb-3 ${
              feedback.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {feedback}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Announcement Title"
            className="w-full border rounded p-2 mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Announcement Message"
            className="w-full border rounded p-2 mb-3 h-24"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Announcement"}
          </button>
        </form>

        <button
          onClick={() => router.push("/staff/dashboard")}
          className="w-full mt-4 bg-gray-200 text-green-700 py-2 rounded hover:bg-gray-300"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
