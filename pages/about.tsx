"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, BookOpen, Target, Eye, Flag, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    {
      name: "Prof. Rita Sunday Nwokodi",
      role: "Vice Chancellor",
      image: "/images/rita.png",
      department: "Administration",
      achievements: [
        "Over 25 years in nursing and healthcare leadership.",
        "Pioneered digital transformation in RSN academic system.",
        "Recipient of the 2023 National Nursing Excellence Award.",
      ],
      bio: "Prof. Rita S. Nwokodi is a visionary leader dedicated to promoting excellence in nursing education. Under her leadership, the school has witnessed infrastructural growth, academic accreditation, and stronger collaborations with medical institutions nationwide.",
    },
    {
      name: "Prof. Ernest Harcourt Whyte",
      role: "Deputy Vice Chancellor — Administration",
      image: "/images/dvca.png",
      department: "Administration",
      achievements: [
        "Spearheaded administrative reforms improving efficiency by 40%.",
        "Published 15+ papers on healthcare management and governance.",
        "Led RSN’s partnership with Rivers State Ministry of Health.",
      ],
      bio: "Prof. Whyte oversees the administrative affairs of RSN, ensuring smooth institutional operations. He is passionate about staff development, accountability, and quality assurance.",
    },
    {
      name: "Prof. Ijoma Otuonye",
      role: "Deputy Vice Chancellor — Academics",
      image: "/images/ijoma.png",
      department: "Academic Affairs",
      achievements: [
        "Established the Continuing Professional Nursing Education (CPNE) program.",
        "Authored key nursing education curriculums adopted by RSN.",
        "Supervised multiple postgraduate research projects.",
      ],
      bio: "Prof. Ijoma Otuonye manages academic affairs and curriculum development. She has dedicated her career to advancing practical nursing education and mentorship.",
    },
    {
      name: "Dr. Grace Nwokoma",
      role: "Deputy Vice Chancellor — Special Duties",
      image: "/images/vc.png",
      department: "Special Duties",
      achievements: [
        "Coordinated RSN’s community outreach and health awareness projects.",
        "Implemented digital academic monitoring tools.",
        "Mentored 200+ student nurses and midwives.",
      ],
      bio: "Dr. Nwokoma has been instrumental in building RSN’s community reputation. Her work emphasizes innovation, mentorship, and holistic healthcare development.",
    },
    {
      name: "Dr. Samuel Eze",
      role: "Registrar",
      image: "/images/registrar.png",
      department: "Registry",
      achievements: [
        "Implemented modern record-keeping and digital admission systems.",
        "Improved student registration efficiency by 60%.",
        "Served as liaison between RSN and Nursing Council of Nigeria.",
      ],
      bio: "As Registrar, Mr. Eze ensures administrative precision and data integrity across all departments. His leadership reflects transparency, accountability, and commitment to excellence.",
    },
    {
      name: "Dr. Chioma Benson",
      role: "Director of Midwifery Studies",
      image: "/images/dr.png",
      department: "Midwifery Department",
      achievements: [
        "Developed advanced midwifery simulation curriculum.",
        "Published multiple articles on maternal health improvement.",
        "Awarded Best Midwifery Educator in Rivers State (2022).",
      ],
      bio: "Mrs. Benson has been instrumental in shaping midwifery education and empowering women in healthcare. She is passionate about maternal and neonatal health.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-64 md:h-80"
      >
        <Image
          src="/images/nursing2.png"
          alt="About Rivers State School of Nursing"
          layout="fill"
          objectFit="cover"
          className="rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide">
            About Us
          </h1>
        </div>
      </motion.div>

      {/* ✅ Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16 flex-grow">
        {/* ✅ Introduction */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Since 1980, RSN has been driving healthcare advancement in Nigeria.
            We are known for our impact through professional training, research,
            and producing skilled, compassionate nurses and midwives.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
            The Rivers State School of Nursing & Midwifery (RSN), one of the
            oldest nursing institutions in Nigeria, was established by the
            Rivers State Government with the vision of equipping nurses and
            midwives with technical, professional, and ethical skills needed to
            transform the healthcare sector across Nigeria and beyond.
          </p>
        </section>

        {/* ✅ History Section */}
        <section className="py-12 bg-white rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">
            Our History
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/images/gate1.png"
              alt="RSN historical image"
              width={500}
              height={400}
              className="rounded-2xl shadow-md object-cover"
            />
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Rivers State School of Nursing & Midwifery (RSN) was founded
                in 1980 by executive order of the Rivers State Government,
                driven by the need to produce qualified nurses and midwives who
                would contribute meaningfully to Nigeria’s healthcare system.
              </p>
              <p className="text-gray-700 leading-relaxed">
                RSN began its academic journey at the old Government Technical
                College in Port Harcourt before moving to its permanent site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The school’s establishment marked a major milestone in nursing
                education in Nigeria — ensuring students received a balanced
                blend of theory and clinical practice.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Timeline Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
            Our Journey
          </h2>
          <div className="relative border-l-4 border-green-700 pl-8 space-y-10 max-w-3xl mx-auto">
            {[
              {
                year: "1980",
                title: "Establishment",
                desc: "RSN was established to ensure professional training and certification of nurses and midwives in Nigeria.",
              },
              {
                year: "1982",
                title: "Permanent Site Approval",
                desc: "Rivers State Government approved a permanent site for RSN to expand its facilities and academic departments.",
              },
              {
                year: "1991",
                title: "Library Development",
                desc: "RSN’s library was established to support research and student learning.",
              },
              {
                year: "2010",
                title: "Accreditation",
                desc: "RSN received full accreditation from the Nursing and Midwifery Council of Nigeria.",
              },
              {
                year: "2024",
                title: "Digital Transformation",
                desc: "RSN introduced e-learning systems and digital health simulation labs for modernized training.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 top-1 w-3 h-3 bg-green-700 rounded-full"></div>
                <h3 className="text-xl font-semibold text-green-800">
                  {item.year}
                </h3>
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ Core Values */}
        <section className="py-12 bg-green-50 text-center rounded-2xl shadow-inner">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Heart className="w-10 h-10 text-green-700 mb-3 mx-auto" />,
                title: "Compassion",
                desc: "We care deeply for the well-being of patients and our community.",
              },
              {
                icon: <Users className="w-10 h-10 text-green-700 mb-3 mx-auto" />,
                title: "Collaboration",
                desc: "We believe in teamwork, respect, and mutual growth.",
              },
              {
                icon: (
                  <BookOpen className="w-10 h-10 text-green-700 mb-3 mx-auto" />
                ),
                title: "Excellence",
                desc: "We uphold academic and professional excellence.",
              },
              {
                icon: <Target className="w-10 h-10 text-green-700 mb-3 mx-auto" />,
                title: "Integrity",
                desc: "We stand by honesty, accountability, and ethical conduct.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
              >
                {value.icon}
                <h3 className="font-semibold text-lg text-green-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ Meet Our Team */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMember(member)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-green-900">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* ✅ Member Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-green-900 text-center">
                {selectedMember.name}
              </h3>
              <p className="text-gray-700 text-center mb-4">
                {selectedMember.role}
              </p>
              <p className="text-gray-700 mb-4 text-center">
                {selectedMember.bio}
              </p>
              <h4 className="font-semibold text-green-900 mb-2">Achievements:</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {selectedMember.achievements.map((ach: string, idx: number) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
