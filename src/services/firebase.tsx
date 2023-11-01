import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC9oljViMPpC0ZzS-dYDvxBVfRBrfv1qFQ",
  authDomain: "teste-3614d.firebaseapp.com",
  projectId: "teste-3614d",
  storageBucket: "teste-3614d.appspot.com",
  messagingSenderId: "296660042989",
  appId: "1:296660042989:web:557232330267872e9178e4",
  measurementId: "G-2S09WB7NRS"
});

export const storage = getStorage(firebaseApp);