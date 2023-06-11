// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAL9kp4Jqhe_BgeT2SQ6M2cn4zqXYTO38k",
  authDomain: "uploadingfile-8cd82.firebaseapp.com",
  projectId: "uploadingfile-8cd82",
  storageBucket: "uploadingfile-8cd82.appspot.com",
  messagingSenderId: "747905055674",
  appId: "1:747905055674:web:84ff82e86b61f1f44dbb83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app);