"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// ✅ Reuse the same news data used in news.tsx
const newsData = [
  {
    title:
      "FUTO-INTERSWITCH PARTNERSHIP: Interswitch Donates IT Equipment to FUTO",
    description:
      "The Federal University of Technology, Owerri (FUTO) was recently selected as one of the beneficiaries of the Interswitch Equipment Donation Drive. This initiative aims to support digital learning and research capacity in Nigerian universities through cutting-edge ICT equipment. The donation underscores FUTO’s growing reputation as a leader in technological advancement and innovation.",
    date: "7 Mar 2025",
    image: "/images/news/news1.jpg",
  },
  {
    title:
      "FUTO CE-sPESS opens Applications for PGD Programmes (Batch C, 2024/2025)",
    description:
      "Apply for the FUTO CE-sPESS PGD Programmes (Batch C, 2024/2025) in Procurement Management, Sustainable Environmental Studies, and Sustainable Social Development. Learn online, attend campus-based exams, and enhance your career with a recognized postgraduate diploma. Apply now!",
    date: "2 Mar 2025",
    image: "/images/news/news2.jpg",
  },
  {
    title: "ACE-FUELS Hosts Innovation Series on Lithium-Polysulfide Flow Batteries",
    description:
      "The Africa Centre of Excellence in Future Energies & Electrochemical Systems (ACE-FUELS) proudly announces its Innovation Series on Lithium-Polysulfide Flow Batteries. This event explores cutting-edge battery technologies aimed at sustainable energy storage.",
    date: "28 Feb 2025",
    image: "/images/news/news3.jpg",
  },
  {
    title: "2025 INTERNATIONAL WOMEN’S DAY CELEBRATIONS AT ACE-FUELS, FUTO",
    description:
      "ACE-FUELS joins the global community to celebrate women in STEM+E on International Women’s Day 2025. The event emphasizes breaking barriers and promoting inclusivity in scientific research and innovation.",
    date: "27 Feb 2025",
    image: "/images/news/news4.jpg",
  },
  {
    title: "FUTO participates in the National Electric Vehicle Competition",
    description:
      "The Federal University of Technology, Owerri (FUTO) proudly participated in the National Electric Vehicle Competition, showcasing innovation and sustainable mobility solutions through student-led engineering projects.",
    date: "27 Feb 2025",
    image: "/images/news/news5.jpg",
  },
  {
    title: "FUTO Celebrates the 10th International Day for Women and Girls in Science",
    description:
      "In collaboration with UNESCO, FUTO’s ACE-FUELS hosted a seminar to celebrate the 10th International Day for Women and Girls in Science, highlighting the role of women in shaping global scientific advancement.",
    date: "8 Feb 2025",
    image: "/images/news/news6.jpg",
  },
  {
    title:
      "INVITATION TO FUTO-IPTTO ONE-DAY WORKSHOP ON THURSDAY FEBRUARY 6, 2025",
    description:
      "The Vice Chancellor, Prof. (Mrs) Nnenna Oti, invites the university community to a one-day Intellectual Property Awareness Workshop at FUTO CE-sPESS Building. The event promotes innovation and IP protection.",
    date: "30 Jan 2025",
    image: "/images/news/news7.jpg",
  },
  {
    title:
      "FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI (FUTO) ANNOUNCES SALES OF 2024/2025 PRE-DEGREE FORMS",
    description:
      "FUTO announces the commencement of sales of its Pre-Degree Programme application forms for the 2024/2025 academic session. This programme provides a strong foundation for university-level education.",
    date: "28 Jan 2025",
    image: "/images/news/news8.jpg",
  },
  {
    title: "POSTGRADUATE ADMISSIONS FOR 2024/2025 ACADEMIC SESSION",
    description:
      "Applications are invited from suitably qualified candidates for admission into full-time and part-time postgraduate programmes for the 2024/2025 academic session at FUTO.",
    date: "26 Jan 2025",
    image: "/images/news/news9.jpg",
  },
  {
    title:
      "ACADEMIC STAFF UNION OF UNIVERSITIES (ASUU) SCHOLARSHIP AWARDS 2024/2025",
    description:
      "ASUU National Scholarship offers ₦200,000 to 2 national awardees, while ASUU-FUTO Scholarship grants ₦100,000 to 10 outstanding students. This initiative supports academic excellence and financial empowerment.",
    date: "17 Jan 2025",
    image: "/images/news/news10.jpg",
  },
  {
    title: "3MTT Skillup Programme 2025",
    description:
      "The 3MTT Skillup Programme 2025, hosted at FUTO Learning Centre, provides free hybrid training in high-demand digital skills like AI, cybersecurity, and software development, empowering Nigeria’s digital workforce.",
    date: "11 Jan 2025",
    image: "/images/news/news11.jpg",
  },
  {
    title:
      "ADMISSION INTO FULL-TIME AND PART-TIME POSTGRADUATE PROGRAMMES FOR 2024/2025 ACADEMIC SESSION",
    description:
      "Applications are open for FUTO postgraduate programmes for the 2024/2025 session. Candidates can pursue master’s, doctorate, and postgraduate diploma degrees in multiple disciplines.",
    date: "25 Dec 2024",
    image: "/images/news/news12.jpg",
  },
  {
    title: "FUTO 36th Convocation Ceremony 2024",
    description:
      "The 36th Convocation Ceremony of FUTO, held on December 7, 2024, marked another milestone in academic excellence, celebrating graduates and outstanding researchers.",
    date: "20 Dec 2024",
    image: "/images/news/news13.jpg",
  },
  {
    title: "SICT Final Year Research Workshop 2024",
    description:
      "The School of Information and Communication Technology (SICT) held its annual Final Year Research Workshop, fostering collaboration and innovation among students and faculty.",
    date: "12 Dec 2024",
    image: "/images/news/news14.jpg",
  },
  {
    title: "FUTO 2024/2025 Supplementary Admission Exercise",
    description:
      "The Federal University of Technology, Owerri, announces the 2024/2025 supplementary admission exercise for qualified candidates seeking entry into various academic programmes.",
    date: "5 Dec 2024",
    image: "/images/news/news15.jpg",
  },
];

// Helper to generate slugs
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function NewsDetailsPage() {
  const params = useParams();
  const router = useRouter();

  // ✅ Add null safety
  if (!params || !("slug" in params)) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            Loading article...
          </h1>
        </div>
      </Layout>
    );
  }

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const newsItem = newsData.find((n) => slugify(n.title) === slug);

  if (!newsItem) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            News article not found.
          </h1>
          <button
            onClick={() => router.push("/news")}
            className="mt-6 bg-green-800 text-white px-6 py-2 rounded-lg"
          >
            Back to News
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative bg-green-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold max-w-3xl mx-auto px-4">
          {newsItem.title}
        </h1>
        <p className="mt-2 text-gray-300">{newsItem.date}</p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {newsItem.image && (
            <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-gray-700 text-lg leading-relaxed">
            {newsItem.description}
          </p>

          <button
            onClick={() => router.push("/news")}
            className="mt-10 flex items-center text-green-800 hover:underline"
          >
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to News
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
