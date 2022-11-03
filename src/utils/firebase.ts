// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  UserInfo,
  NextFn,
  getAuth,
  signInWithRedirect,
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
  query,
  getDocs,
  writeBatch,
  Timestamp,
} from "firebase/firestore";

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

// Authentication
export const auth = getAuth();

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

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

// Firestore
export const db = getFirestore();

export const addDocsToCollection = async (
  collectionKey: string,
  docsToAdd: any
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  if (Array.isArray(docsToAdd)) {
    for (const curDoc of docsToAdd) {
      const docRef = doc(collectionRef);
      batch.set(docRef, curDoc);
    }
  } else {
    for (const curDoc in docsToAdd) {
      const docRef = doc(collectionRef, curDoc);
      batch.set(docRef, docsToAdd[curDoc]);
    }
  }

  await batch.commit();
};

export const getCollectionData = async (collectionName: string) => {
  try {
    const collectionRef = collection(db, collectionName);
    const collectionQuery = query(collectionRef);
    const querySnapshot = await getDocs(collectionQuery);
    return querySnapshot.docs?.map((doc) => doc.data());
  } catch (err) {
    console.error("Error getting docs:", err);
    return [];
  }
};

// Authentication and Firestore
export const getUser = async (user: UserInfo) => {
  try {
    const userDocRef = doc(db, `users/${user.uid}`);
    const userSnapshot = await getDoc(userDocRef);

    return userSnapshot;
  } catch (err) {
    console.error("Error getting userSnapshot:", err);
  }
};

type AdditionalInformationType = { displayName?: string; phoneNumber?: string };

export const createUserDoc = async (
  userAuth: UserInfo,
  additionalInformation: AdditionalInformationType = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    let { displayName, email, phoneNumber } = userAuth;
    if (!displayName) displayName = additionalInformation.displayName || null;
    if (!phoneNumber) phoneNumber = additionalInformation.phoneNumber || null;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        phoneNumber,
        createdAt,
        isAdmin: false,
      });
    } catch (err) {
      console.error("Error creating user:", userAuth);
      alert("Authentication was not successful, please try again");
      return;
    }
  }

  return userDocRef;
};

type TicketType = {
  tier: string;
  price: string;
  quantity: string;
};

type EventInformationType = {
  name: string;
  location: string;
  date: string;
  tickets: TicketType[];
  isPublic: boolean;
};

export const createEventDoc = async (
  ticketInformation: EventInformationType
) => {
  const { name, location, date, tickets, isPublic } = ticketInformation;

  try {
    const collectionRef = collection(db, "events");
    await setDoc(doc(collectionRef), {
      name,
      location,
      date: Timestamp.fromDate(new Date(date)),
      isPublic,
      tickets: tickets.reduce((acc: any, cur: any) => {
        if (cur.tier !== "")
          acc[cur.tier] = {
            price: +cur.price,
            remaining: +cur.quantity,
            total: +cur.quantity,
          };
        return acc;
      }, {}),
    });
  } catch (error) {
    console.error("Error setting event doc:", error);
  }
};

export const createMerchDoc = async (merchInformation: any) => {
  console.log("createMerchDoc needs a lot of work", merchInformation);
};
