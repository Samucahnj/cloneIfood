import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
import { FacebookAuthProvider } from 'firebase/firebase-auth';

const firebaseConfig = {
  apiKey: "AIzaSyAuh0IJ2V3UYenQr7KgR_dHXcZdv52iQJo",
  authDomain: "login-clone-ifood.firebaseapp.com",
  projectId: "login-clone-ifood",
  storageBucket: "login-clone-ifood.appspot.com",
  messagingSenderId: "317334758344",
  appId: "1:317334758344:web:60a62476d99ede9b3e96fd"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  googleLogar: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider)
    return result
  }

  ,facebookAuth: async () => {
    const providere = new firebase.auth.FacebookAuthProvider();
    const fbAuth = firebase.auth().signInWithPopup(providere)
    return fbAuth  
  }
}


