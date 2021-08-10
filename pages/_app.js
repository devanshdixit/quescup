import "../styles/bootstrap-5.0.2-dist/css/bootstrap.css";
import "../styles/bootstrap-5.0.2-dist/css/bootstrap.min.css";
import "../styles/globals.css";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

function MyApp({ Component, pageProps }) {
  const firebaseConfig = {
    apiKey: "AIzaSyBPQzaXF585mXdmlDkTRt-eLsLWgWP4WUw",
    authDomain: "final-feef1.firebaseapp.com",
    databaseURL: "https://final-feef1.firebaseio.com",
    projectId: "final-feef1",
    storageBucket: "final-feef1.appspot.com",
    messagingSenderId: "927190720438",
    appId: "1:927190720438:web:6ef1f3a1d56a046c50eb17",
    measurementId: "G-2Q9JNTQCFL",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  return <Component {...pageProps} />;
}

export default MyApp;
