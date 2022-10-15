import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsG2LS0o8j1RrWeTko5YKyvDVMfVnZBp8",
  authDomain: "cp-disney-plus-clone-final.firebaseapp.com",
  projectId: "cp-disney-plus-clone-final",
  storageBucket: "cp-disney-plus-clone-final.appspot.com",
  messagingSenderId: "794648566736",
  appId: "1:794648566736:web:5e29e2d00b8cd60a6937d5",
  measurementId: "G-6GXVQGV33E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
