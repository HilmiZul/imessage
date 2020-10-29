import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCOAb5_aUMotn0ObMGR0PWzOLzM2vrU-Yk",
  authDomain: "imessage-clone-15dad.firebaseapp.com",
  databaseURL: "https://imessage-clone-15dad.firebaseio.com",
  projectId: "imessage-clone-15dad",
  storageBucket: "imessage-clone-15dad.appspot.com",
  messagingSenderId: "667291864008",
  appId: "1:667291864008:web:d2873fcf636c8dc8b34efd",
  measurementId: "G-WFH4Q6SF59"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;