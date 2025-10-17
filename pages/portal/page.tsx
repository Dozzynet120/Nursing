"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-800 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Portal</h1>
          <Link href="/" className="hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Body */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Welcome to the Rivers State School of Nursing Portal
          </h2>
          <p className="text-gray-600 mb-8">
            Access your academic records, results, payment history, and other
            student services here.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/portal/login"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Login
            </Link>
            <Link
              href="/portal/register"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Register
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
