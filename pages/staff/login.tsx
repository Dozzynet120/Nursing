"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import Image from "next/image";

export default function StaffLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [bgIndex, setBgIndex] = useState(0);

  // 🔹 Background images
  const backgrounds = ["/images/gate.png", "/images/gate1.png", "/images/gate2.png"];

  // 🔹 Slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 15000); // every 15 seconds
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/staff/dashboard");
    } catch (err: any) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* 🔹 Background images */}
      {backgrounds.map((bg, i) => (
        <Image
          key={i}
          src={bg}
          alt={`Background ${i}`}
          fill
          unoptimized
          className="object-cover z-0 transition-opacity duration-2000 ease-in-out"
          style={{ opacity: i === bgIndex ? 1 : 0 }}
        />
      ))}

      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/50 z-10"></div>

      {/* 🔹 Login form */}
      <div className="relative z-20 flex justify-center w-full px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white/90 backdrop-blur-md shadow-md rounded p-8 w-full max-w-sm"
        >
          <h2 className="text-center text-xl font-bold mb-6 text-gray-800">
            Staff Login
          </h2>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 mb-3"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => router.push("/staff/register")}
            className="w-full bg-gray-200 text-green-800 py-2 rounded hover:bg-gray-300"
          >
            Register
          </button>
        </form>
      </div>

      {/* 🔹 Background zoom animation */}
      <style jsx global>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .object-cover {
          animation: slowZoom 40s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
