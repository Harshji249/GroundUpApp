import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCImuSE4FdRXdXF1n2CYxI0fwkMSMCf_sM",
  authDomain: "groundup-46357.firebaseapp.com",
  projectId: "groundup-46357",
  storageBucket: "groundup-46357.appspot.com",
  messagingSenderId: "95971052490",
  appId: "1:95971052490:web:e44e1e68e49df3e0935d33",
  measurementId: "G-H06G0Q0C5Q"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;