// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCYrDImPoTMzb9GTSMyc9O-REfP1-ZJfA",
  authDomain: "bistro-boss-restaurant-39f0a.firebaseapp.com",
  projectId: "bistro-boss-restaurant-39f0a",
  storageBucket: "bistro-boss-restaurant-39f0a.appspot.com",
  messagingSenderId: "954308643821",
  appId: "1:954308643821:web:ba645a0de95a15647cf5e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app