"use client";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/firebase/config";

// ✅ Define message type
interface Message {
  id: string;
  sender: string;
  receiver: string;
  text: string;
  timestamp: Date;
}

export default function Messages() {
  // ✅ Tell TypeScript what type the array contains
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Message, "id">), // Cast data safely
      }));
      setMessages(msgs);
    });
    return unsubscribe;
  }, []);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await addDoc(collection(db, "messages"), {
      sender: "staff123",
      receiver: "admin",
      text,
      timestamp: new Date(),
    });
    setText("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <div className="h-60 overflow-y-auto border p-3 mb-4 rounded">
        {messages.map((msg) => (
          <p
            key={msg.id}
            className={`mb-2 ${
              msg.sender === "staff123"
                ? "text-right text-green-700"
                : "text-left text-gray-700"
            }`}
          >
            {msg.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={sendMessage}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}
