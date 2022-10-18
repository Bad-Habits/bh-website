// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  UserInfo,
  NextFn,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { MerchItemType } from "./types";
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

export const db = getFirestore();

export const addDocsToCollection = async (
  collectionKey: string,
  docsToAdd: MerchItemType[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  docsToAdd.forEach((object) => {
    const docRef = doc(collectionRef);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("batch commited to:", collectionKey);
};

// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, "categories");
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);
//   const categoryMap = querySnapshot.docs.reduce((acc: any, docSnapshot) => {
//     const { title, items } = docSnapshot.data();
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});

//   return categoryMap;
// };

type AdditionalInformationType = { displayName?: string; phoneNumber?: string };

export const createUserDoc = async (
  userAuth: UserInfo,
  additionalInformation: AdditionalInformationType = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        phoneNumber,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.error("error creating user:", userAuth);
      alert("Authentication was not successful, please try again");
      return;
    }
  }

  return userDocRef;
};

export const createNewUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextFn<UserInfo | null>) =>
  onAuthStateChanged(auth, callback);
