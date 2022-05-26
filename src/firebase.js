import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDu7AZ4xKAT3FSjvenwy2WQ4GON24CePkM",
  authDomain: "leaguetracker-9f0f8.firebaseapp.com",
  projectId: "leaguetracker-9f0f8",
  storageBucket: "leaguetracker-9f0f8.appspot.com",
  messagingSenderId: "83222535282",
  appId: "1:83222535282:web:44bce54fa403be814db6eb",
  measurementId: "G-LJ6NQVXE6W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);