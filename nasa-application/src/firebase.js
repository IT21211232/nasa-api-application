// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpn2LK-L43SXVY15b9IgprplYmd4alDeU",
  authDomain: "afassignment2-bc8d6.firebaseapp.com",
  projectId: "afassignment2-bc8d6",
  storageBucket: "afassignment2-bc8d6.appspot.com",
  messagingSenderId: "650868731010",
  appId: "1:650868731010:web:31276fa1a8fbf911fa589b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);