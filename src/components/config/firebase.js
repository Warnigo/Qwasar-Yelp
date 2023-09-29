import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACXUVHlm9rjxP-o3q8_Ko4M954Zsw6Gpg",
  authDomain: "qwasar-yelp.firebaseapp.com",
  projectId: "qwasar-yelp",
  storageBucket: "qwasar-yelp.appspot.com",
  messagingSenderId: "120153480057",
  appId: "1:120153480057:web:a97b5e2163dc835017ada8",
  measurementId: "G-NTJC42JHE8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };