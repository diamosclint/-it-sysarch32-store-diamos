import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDxKDXAqnrgDmSlfZR-ffic21OoNnO_cz8",
    authDomain: "it-sysarch32-store-diamos.firebaseapp.com",
    projectId: "it-sysarch32-store-diamos",
    storageBucket: "it-sysarch32-store-diamos.appspot.com",
    messagingSenderId: "136691463756",
    appId: "1:136691463756:web:48136cabe6fc75cd6aa6e9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
