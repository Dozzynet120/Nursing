"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function StaffLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    <div className="flex justify-center items-center h-screen bg-green-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded p-8 w-80"
      >
        <h2 className="text-center text-xl font-bold mb-6">Staff Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 mb-3"
        >
          Login
        </button>

        {/* Register button */}
        <button
          type="button"
          onClick={() => router.push("/staff/register")}
          className="w-full bg-gray-200 text-green-800 py-2 rounded hover:bg-gray-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
