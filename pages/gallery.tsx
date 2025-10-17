"use client";

import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function GalleryPage() {
  // List of 12 gallery images
  const galleryImages = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/13.webp",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/14.webp",
    "/images/8.jpeg",
    "/images/9.webp",
    "/images/10.webp",
    "/images/11.webp",
    "/images/12.webp",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-900 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          Explore memorable moments, campus activities, and community impact at the 
          Rivers State School of Nursing & Midwifery, Port Harcourt.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Campus Life in Pictures</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-900 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Visit Our Campus</h2>
        <p className="text-gray-200 mb-6">
          Come experience a serene and inspiring environment where learning and compassion thrive.
        </p>
        <a
          href="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition"
        >
          Contact Us
        </a>
      </section>
    </Layout>
  );
}
