"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Alumni {
  id: number;
  name: string;
  program: string;
  year: string;
  job: string;
  image: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const alumniData: Alumni[] = [
  {
    id: 1,
    name: "Dr. Chioma Ndukwe",
    program: "Medicine & Surgery",
    year: "2021",
    job: "Resident Doctor, LUTH",
    image: "/images/Dr1.png",
  },
  {
    id: 2,
    name: "Dr. Ibrahim Musa",
    program: "Nursing Science",
    year: "2020",
    job: "Public Health Nurse, WHO Africa",
    image: "/images/Dr2.png",
  },
  {
    id: 3,
    name: "Dr. Grace Okon",
    program: "Medical Laboratory Science",
    year: "2022",
    job: "Senior Lab Technologist, NIMR Yaba",
    image: "/images/Dr3.png",
  },
  {
    id: 4,
    name: "Dr. Emeka Obi",
    program: "Pharmacy",
    year: "2019",
    job: "Clinical Pharmacist, St. Nicholas Hospital",
    image: "/images/Dr4.png",
  },
  {
    id: 5,
    name: "Dr. Maryam Yusuf",
    program: "Public Health",
    year: "2023",
    job: "Health Policy Analyst, UNICEF Nigeria",
    image: "/images/Dr5.png",
  },
];

const eventsData: Event[] = [
  {
    id: 1,
    title: "2024 Alumni Homecoming Gala",
    date: "December 15, 2024",
    description:
      "A night of celebration and networking among our distinguished alumni at Eko Hotels & Suites.",
    image: "/images/gala.png",
  },
  {
    id: 2,
    title: "Medical Outreach in Ibeju-Lekki",
    date: "June 20, 2024",
    description:
      "Over 50 alumni participated in providing free health checkups and community medical aid.",
    image: "/images/out.webp",
  },
  {
    id: 3,
    title: "Career Mentorship Seminar",
    date: "March 10, 2024",
    description:
      "Our alumni professionals mentored final-year students on career growth and job placement.",
    image: "/images/us.webp",
  },
];

const AlumniPage: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    year: "",
    program: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleFAQ = (index: number) =>
    setFaqOpen(faqOpen === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await addDoc(collection(db, "alumniNetwork"), {
        name: form.name,
        email: form.email,
        year: form.year,
        program: form.program,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setTimeout(() => {
        setShowForm(false);
        setSubmitted(false);
        setForm({ name: "", email: "", year: "", program: "" });
      }, 2000);
    } catch (err) {
      console.error("Error saving alumni info:", err);
      setError("❌ Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "How can I register as an alumnus?",
      a: "Click the 'Join Alumni Network' button below and fill in your details. You’ll be added to our alumni database after verification.",
    },
    {
      q: "Are there annual alumni events?",
      a: "Yes! We organize yearly homecoming and mentorship events where alumni connect, mentor students, and network professionally.",
    },
    {
      q: "Can I contribute to alumni projects?",
      a: "Absolutely. You can volunteer, donate, or partner with us on community projects or scholarship funds.",
    },
  ];

  return (
    <>
      <Navbar />

      <motion.div
        className="bg-gray-50 min-h-screen py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* HEADER */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Our Proud Medical Alumni Network
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence in healthcare, innovation, and humanity.
            Our alumni are saving lives and mentoring future medical leaders.
          </p>
        </motion.div>

        {/* ALUMNI GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {alumniData.map((alum) => (
            <motion.div
              key={alum.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:scale-[1.02] transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={alum.image}
                alt={alum.name}
                width={400}
                height={300}
                className="rounded-xl mb-4 object-cover w-full h-56"
              />
              <h3 className="text-lg font-semibold text-green-700">
                {alum.name}
              </h3>
              <p className="text-gray-500">
                {alum.program} ({alum.year})
              </p>
              <p className="mt-2 text-sm text-gray-600">{alum.job}</p>
            </motion.div>
          ))}
        </div>

        {/* EVENTS SECTION */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Alumni Events & Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-green-700 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-2">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between text-left text-lg"
              >
                <span className="font-medium text-gray-800">{faq.q}</span>
                <span className="text-xl">
                  {faqOpen === index ? "−" : "+"}
                </span>
              </button>
              {faqOpen === index && (
                <motion.p
                  className="mt-2 text-gray-600 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {faq.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mb-10">
          <motion.button
            className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition font-medium text-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowForm(true)}
          >
            Join Alumni Network
          </motion.button>
        </div>
      </motion.div>

      {/* JOIN ALUMNI MODAL */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg w-96 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                Join Alumni Network
              </h3>

              {submitted ? (
                <p className="text-green-600 text-center font-medium">
                  ✅ Thank you! Your submission has been received.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded p-2 mb-3"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded p-2 mb-3"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Graduation Year"
                    className="w-full border rounded p-2 mb-3"
                    value={form.year}
                    onChange={(e) =>
                      setForm({ ...form, year: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Program Studied"
                    className="w-full border rounded p-2 mb-4"
                    value={form.program}
                    onChange={(e) =>
                      setForm({ ...form, program: e.target.value })
                    }
                    required
                  />

                  {error && (
                    <p className="text-red-500 text-sm text-center mb-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default AlumniPage;
