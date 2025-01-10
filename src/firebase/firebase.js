import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsmALKSRaUzosK0qm9egHbgqMVFjqbLhw",
  authDomain: "connectify-9a808.firebaseapp.com",
  projectId: "connectify-9a808",
  storageBucket: "connectify-9a808.firebasestorage.app",
  messagingSenderId: "83426319922",
  appId: "1:83426319922:web:ee6acd7dc4abe8a066a62b"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth };
