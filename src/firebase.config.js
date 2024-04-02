// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJV6b7glhl7Uqzu_iLGpLMPRNHbVM5NXM",
  authDomain: "email-password-authentic-85f21.firebaseapp.com",
  projectId: "email-password-authentic-85f21",
  storageBucket: "email-password-authentic-85f21.appspot.com",
  messagingSenderId: "967786340782",
  appId: "1:967786340782:web:c4418ce1c203896b49e83f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;