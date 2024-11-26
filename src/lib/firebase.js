import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCH8SdLClZKBVi98S5EcCZEejD8pRxXXkE",
  authDomain: "social-media-app-e2a59.firebaseapp.com",
  projectId: "social-media-app-e2a59",
  storageBucket: "social-media-app-e2a59.firebasestorage.app",
  messagingSenderId: "175955403098",
  appId: "1:175955403098:web:14760c012dfb8c7e7d5363",
  measurementId: "G-9V0CKNV768",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); // currently not in use
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
