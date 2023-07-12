import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrB2Q4oNvOQfLbuUpEkFp5SijgQeAnnG8",
  authDomain: "forestfire-6e7a4.firebaseapp.com",
  databaseURL: "https://forestfire-6e7a4-default-rtdb.firebaseio.com",
  projectId: "forestfire-6e7a4",
  storageBucket: "forestfire-6e7a4.appspot.com",
  messagingSenderId: "9067773259",
  appId: "1:9067773259:web:e833c15ab01843c392bcce",
  measurementId: "G-ETNNE21JSE",
};
const app = initializeApp(firebaseConfig);
export default app;