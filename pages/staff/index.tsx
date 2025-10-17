"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function StaffPortal() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // 🔹 Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push("/staff/dashboard"); // redirect to staff dashboard
    } catch (error: any) {
      alert("Login failed: " + error.message);
    }
  };

  // 🔹 Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {!user ? (
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg w-80"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
            Staff Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full p-2 mb-3 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full p-2 mb-3 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-700 text-white w-full py-2 rounded hover:bg-green-800"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Welcome, {user.email}
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
