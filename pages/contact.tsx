"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { db } from "@/firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // ✅ Initialize EmailJS (Client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      emailjs.init("0OgvWwEb4_F9vNco6"); // Your Public Key
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    const formData = new FormData(formRef.current);
    const contact_name = formData.get("contact_name")?.toString() || "";
    const contact_email = formData.get("contact_email")?.toString() || "";
    const contact_address = formData.get("contact_address")?.toString() || "";
    const contact_phone = formData.get("contact_phone")?.toString() || "";

    try {
      // ✅ Save message to Firestore
      await addDoc(collection(db, "messages"), {
        contact_name,
        contact_email,
        contact_address,
        contact_phone,
        createdAt: Timestamp.now(),
      });

      // ✅ Send Email through EmailJS
      const response = await emailjs.sendForm(
        "service_g1mlivk", // Your Service ID
        "template_c0qo99q", // Your Template ID
        formRef.current,
        "0OgvWwEb4_F9vNco6" // Your Public Key
      );

      console.log("EmailJS Response:", response);

      if (response.status === 200) {
        setStatus("✅ Message sent successfully!");
        formRef.current.reset();
      } else {
        setStatus("⚠️ Email service issue — please try again later.");
      }
    } catch (error: any) {
      console.error("EmailJS or Firestore Error:", error);
      if (error?.text) {
        setStatus(`❌ EmailJS Error: ${error.text}`);
      } else {
        setStatus("❌ Failed to send message. Please check your EmailJS setup or internet.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-green-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-6"
          >
            Contact Us
          </motion.h1>

          <p className="text-center text-gray-600 mb-10">
            Have any questions, suggestions, or feedback? We’d love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* ✅ Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="flex items-start gap-4">
                <Phone className="text-green-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900">Phone</h3>
                  <p className="text-gray-600">+234 806 715 3799</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-green-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900">Email</h3>
                  <p className="text-gray-600">info@rsn.edu.ng</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-green-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900">Address</h3>
                  <p className="text-gray-600">
                    1526 PMB, Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>

              <iframe
                className="w-full h-56 rounded-lg border border-green-200 mt-4"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.916546765607!2d7.028403274693767!3d4.813063440158832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdd9c94a72cf%3A0x3a19ffef305dfdd2!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1692546328291!5m2!1sen!2sng"
              ></iframe>
            </motion.div>

            {/* ✅ Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <input
                type="text"
                name="contact_name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                name="contact_email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="contact_address"
                placeholder="Home Address"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="contact_phone"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-700 hover:bg-green-800"
                }`}
              >
                <Send size={18} /> {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center text-sm font-medium ${
                    status.startsWith("✅") ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {status}
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
