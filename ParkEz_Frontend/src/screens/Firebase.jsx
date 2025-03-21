// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpLx0ljeLAS7CbTnO3LT_mn0Fmz__BdNc",
  authDomain: "smart-parking-system-dc9e9.firebaseapp.com",
  projectId: "smart-parking-system-dc9e9",
  storageBucket: "smart-parking-system-dc9e9.firebasestorage.app",
  messagingSenderId: "501790865933",
  appId: "1:501790865933:web:96f0d8ac83e20bb8383344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Functions for Google Sign-In and Sign-Out
const signInWithGoogle = () => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);

export { auth, signInWithGoogle, logOut };