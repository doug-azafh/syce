import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGoKhaZ28nIPKPA5Ub-cidkLEHd8XVVNo",
  authDomain: "syce-b61a3.firebaseapp.com",
  projectId: "syce-b61a3",
  storageBucket: "syce-b61a3.appspot.com",
  messagingSenderId: "757935279377",
  appId: "1:757935279377:web:f8642f2371bf878d4650b0",
  measurementId: "G-JJTF6FFXPJ",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

const storage = getStorage(firebaseApp);

export { auth, db, storage };
