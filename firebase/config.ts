// /lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvtMx-wu_Hh6roDS9yaxevbjZARCTXucM",
  authDomain: "rsn-admissions.firebaseapp.com",
  projectId: "rsn-admissions",
  storageBucket: "rsn-admissions.firebasestorage.app",
  messagingSenderId: "985748145663",
  appId: "1:985748145663:web:a459acec87e708e8ba53ca",
  measurementId: "G-1FW1K6M4NM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
