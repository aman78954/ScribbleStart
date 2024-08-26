// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDCDi58ZvAw5IJN31brWZYFM6x6M9F9OlE",
  authDomain: "myblog-84ca2.firebaseapp.com",
  projectId: "myblog-84ca2",
  storageBucket: "myblog-84ca2.appspot.com",
  messagingSenderId: "338511950016",
  appId: "1:338511950016:web:a72d689ff404594e927d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export{ fireDb, auth, storage };