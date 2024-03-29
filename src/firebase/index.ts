
import firebase from 'firebase/app';
import 'firebase/auth';

import { createContext, useContext } from 'react';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

class Firebase {
  auth: firebase.auth.Auth;
  provider: firebase.auth.GoogleAuthProvider;

  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  signIn = () => this.auth.signInWithPopup(this.provider);
  signOut = () => this.auth.signOut();
}

export const FirebaseContext = createContext<Firebase | null>(null);
export const useFirebase = () => useContext(FirebaseContext);

export const UserContext = createContext<firebase.User | null>(null);
export const useUser = () => useContext(UserContext);

export default Firebase;