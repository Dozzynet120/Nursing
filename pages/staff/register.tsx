"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export default function StaffRegister() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ✅ Create Firebase Auth account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Save staff info in Firestore
      await setDoc(doc(db, "staff", user.uid), {
        name,
        email,
        phone,
        createdAt: new Date(),
      });

      alert("Registration successful!");
      router.push("/staff/dashboard"); // ✅ Redirect to dashboard after success
    } catch (err: any) {
      console.error("Registration Error:", err);

      if (err.code === "auth/email-already-in-use") {
        setError("Email is already registered.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded p-8 w-80"
      >
        <h2 className="text-center text-xl font-bold mb-6">Staff Registration</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded p-2 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border rounded p-2 mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 rounded ${
            loading ? "bg-green-400" : "bg-green-700 hover:bg-green-800"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
