import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBuy51lepgTbhbDQsmQ4XKyZp1beiYj_v4",
  authDomain: "react-twitter-clone-981cf.firebaseapp.com",
  projectId: "react-twitter-clone-981cf",
  storageBucket: "react-twitter-clone-981cf.appspot.com",
  messagingSenderId: "182989005155",
  appId: "1:182989005155:web:38fed15f13de8d5dd9f356",
  measurementId: "G-4VWFQD8LNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);