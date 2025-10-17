"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Upload,
  Mail,
  FileText,
  ArrowRight,
  GraduationCap,
  User,
} from "lucide-react";
import { db, storage } from "@/firebase/config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  "Personal Details",
  "Academic Information",
  "Upload Documents",
  "Verification",
  "Review & Submit",
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    address: string;
    dob: string;
    gender: string;
    program: string;
    previousInstitution: string;
    qualification: string;
    grade: string;
    documents: File[];
    verificationCode: string;
    agreeTerms: boolean;
  }>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    program: "",
    previousInstitution: "",
    qualification: "",
    grade: "",
    documents: [],
    verificationCode: "",
    agreeTerms: false,
  });

  // Save progress to Firestore
  const saveProgress = async () => {
    try {
      const docRef = doc(collection(db, "applications"), formData.email || "temp_user");
      await setDoc(docRef, { ...formData, currentStep }, { merge: true });
      console.log("Progress saved ✅");
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  // Next Step
  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      await saveProgress();
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Back Step
  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  // Submit final application
  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      // 1️⃣ Upload all documents
      const uploadedFiles: string[] = [];
      for (const file of formData.documents) {
        const storageRef = ref(storage, `applications/${formData.email}/${file.name}`);
        await uploadBytes(storageRef, file);
        uploadedFiles.push(file.name);
      }

      // 2️⃣ Save final data in Firestore
      await addDoc(collection(db, "applications_submitted"), {
        ...formData,
        documents: uploadedFiles,
        submittedAt: new Date().toISOString(),
      });

      alert("🎉 Application submitted successfully!");
      setCurrentStep(0);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        gender: "",
        program: "",
        previousInstitution: "",
        qualification: "",
        grade: "",
        documents: [],
        verificationCode: "",
        agreeTerms: false,
      });
    } catch (error) {
      console.error("Error submitting:", error);
      alert("❌ Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-green-50 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-2xl">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between mb-2 text-sm text-gray-700">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${
                    index <= currentStep
                      ? "text-green-700 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-green-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Dynamic Step Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* STEP 1 */}
            {currentStep === 0 && (
              <section>
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <User className="text-green-700" /> Personal Details
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border rounded-md px-4 py-2"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border rounded-md px-4 py-2"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border rounded-md px-4 py-2"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Residential Address"
                    className="border rounded-md px-4 py-2"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                  <input
                    type="date"
                    className="border rounded-md px-4 py-2"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                  />
                  <select
                    className="border rounded-md px-4 py-2"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </section>
            )}

            {/* STEP 2 */}
            {currentStep === 1 && (
              <section>
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="text-green-700" /> Academic
                  Information
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <select
                    className="border rounded-md px-4 py-2"
                    value={formData.program}
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                  >
                    <option value="">Select Program</option>
                    <option>Basic Nursing</option>
                    <option>Post Basic Midwifery</option>
                    <option>Public Health Nursing</option>
                    <option>Community Nursing</option>
                    <option>General Nursing</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Previous Institution"
                    className="border rounded-md px-4 py-2"
                    value={formData.previousInstitution}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        previousInstitution: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Highest Qualification"
                    className="border rounded-md px-4 py-2"
                    value={formData.qualification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        qualification: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Grade/Result"
                    className="border rounded-md px-4 py-2"
                    value={formData.grade}
                    onChange={(e) =>
                      setFormData({ ...formData, grade: e.target.value })
                    }
                  />
                </div>
              </section>
            )}

            {/* STEP 3 */}
            {currentStep === 2 && (
              <section>
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Upload className="text-green-700" /> Upload Documents
                </h2>
                <div className="border-2 border-dashed border-green-400 p-8 rounded-lg text-center">
                  <Upload className="mx-auto mb-3 text-green-600" size={40} />
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        documents: Array.from(e.target.files || []),
                      })
                    }
                  />
                </div>
              </section>
            )}

            {/* STEP 4 */}
            {currentStep === 3 && (
              <section>
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Mail className="text-green-700" /> Verification
                </h2>
                <input
                  type="text"
                  placeholder="Enter Verification Code"
                  className="w-full border rounded-md px-4 py-2"
                  value={formData.verificationCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      verificationCode: e.target.value,
                    })
                  }
                />
              </section>
            )}

            {/* STEP 5 */}
            {currentStep === 4 && (
              <section>
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="text-green-700" /> Review & Submit
                </h2>
                <div className="bg-gray-50 p-5 rounded-md text-gray-700 space-y-2">
                  <p>
                    <strong>Name:</strong> {formData.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Program:</strong> {formData.program}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeTerms: e.target.checked,
                      })
                    }
                  />
                  <label className="text-sm text-gray-600">
                    I confirm that all information provided is correct.
                  </label>
                </div>
              </section>
            )}
          </motion.div>

          {/* Buttons */}
          <div className="mt-8 flex justify-between">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition flex items-center gap-2"
              >
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!formData.agreeTerms || isSubmitting}
                className={`px-6 py-2 rounded-md flex items-center gap-2 transition ${
                  formData.agreeTerms
                    ? "bg-green-700 text-white hover:bg-green-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"} <FileText size={16} />
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
