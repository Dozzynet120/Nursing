"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function PortalLoginPage() {
  const router = useRouter();
  const [showForgot, setShowForgot] = useState(false);
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // --- Handle login ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!regNo || !password) {
      setError("Please enter your Registration Number and Password.");
      return;
    }

    try {
      setLoading(true);

      // In a real app, you'd verify regNo + password with your backend or Firebase here.
      // For now, simulate login success:
      setTimeout(() => {
        router.push("/portal/dashboard");
      }, 1000);
    } catch (err: any) {
      setError("Invalid credentials, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // --- Handle password reset ---
  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setError("Please enter your registered email address.");
      return;
    }

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage("A password reset link has been sent to your email.");
      setError(null);
      setResetEmail("");
    } catch (err: any) {
      setError(err.message || "Failed to send reset email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/nursing2.png')", // Ensure image exists in /public
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-green-900/95 backdrop-blur-md p-6 rounded-xl shadow-2xl w-[90%] max-w-lg z-10 text-white border border-green-700/40"
      >
        <h1 className="text-2xl font-bold text-center text-white mb-5">
          Student Portal Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <input
            type="text"
            placeholder="Registration No"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            className="flex-1 min-w-[120px] px-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 min-w-[120px] px-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition whitespace-nowrap shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-400 text-center mt-3 text-sm">{error}</p>}

        <div className="flex justify-center mt-5 text-sm text-gray-200">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowForgot(true);
            }}
            className="hover:underline text-green-300"
          >
            Forgot Password?
          </a>
        </div>
      </motion.div>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {showForgot && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg border border-green-800/50 rounded-xl p-6 w-[90%] max-w-md text-center text-white shadow-2xl"
            >
              <h2 className="text-xl font-semibold mb-3 text-green-200">
                Forgot Password
              </h2>
              <p className="text-sm mb-4 text-gray-200">
                Enter your registered email below to receive a password reset
                link.
              </p>

              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none mb-4"
              />

              {message && (
                <p className="text-green-300 text-sm mb-3">{message}</p>
              )}
              {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setShowForgot(false);
                    setMessage(null);
                    setError(null);
                  }}
                  className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white font-medium transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordReset}
                  disabled={loading}
                  className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
