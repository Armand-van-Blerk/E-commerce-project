import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxpYIeoy62ljuYEPrCiuinfGYkVpDmDc8",
  authDomain: "crwn-db-67ef0.firebaseapp.com",
  databaseURL: "https://crwn-db-67ef0.firebaseio.com",
  projectId: "crwn-db-67ef0",
  storageBucket: "crwn-db-67ef0.appspot.com",
  messagingSenderId: "949499512155",
  appId: "1:949499512155:web:a545d22df99709a246867e"
};

firebase.initializeApp(config);

// google auth
export const auth = firebase.auth();
// firebase db
export const firestore = firebase.firestore();

// google auth utillity
// stating that google will be used to sign in
// other providers also avalible like twitter and facebook

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// go to firebase console and set up support email and enable google auth
export default firebase;
