import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_bkZAgOWjTaA3SkRA7EgvLafXIyNaRss",
  authDomain: "guill-tools.firebaseapp.com",
  projectId: "guill-tools",
  storageBucket: "guill-tools.appspot.com",
  messagingSenderId: "295012866890",
  appId: "1:295012866890:web:9100d443455fc849bc7fb3",
  measurementId: "G-4PR1X0DTSJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);