import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0WWQ66h_yI4hq0L0_LtjmZK6XXSimiLI",
  authDomain: "chatgpt-dario.firebaseapp.com",
  projectId: "chatgpt-dario",
  storageBucket: "chatgpt-dario.appspot.com",
  messagingSenderId: "852046364912",
  appId: "1:852046364912:web:ebf176f17ac5b5271d4235",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
