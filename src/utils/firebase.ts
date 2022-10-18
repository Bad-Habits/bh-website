// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXtWsrs1rjl9_VFHqSOMYQyh850qXRLd0",
  authDomain: "bh-website-e6134.firebaseapp.com",
  projectId: "bh-website-e6134",
  storageBucket: "bh-website-e6134.appspot.com",
  messagingSenderId: "777190501683",
  appId: "1:777190501683:web:418934215b3900071fa246",
  measurementId: "G-8B36WZERPR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
/*const analytics =*/ getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
