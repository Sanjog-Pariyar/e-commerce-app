import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBp13CSbFfcoC_YY174xs0rkzXKjbxc3Uc",
    authDomain: "cart-database-e297e.firebaseapp.com",
    projectId: "cart-database-e297e",
    storageBucket: "cart-database-e297e.appspot.com",
    messagingSenderId: "131216375494",
    appId: "1:131216375494:web:5e9526c365eb4352d761c7",
    measurementId: "G-LMMXME8N23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const dataBase = getDatabase(app)