import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    // apiKey: FIREBASE_API_KEY,
    authDomain: "monarch-apparel.firebaseapp.com",
    databaseURL: "https://monarch-apparel.firebaseio.com",
    projectId: "monarch-apparel",
    storageBucket: "monarch-apparel.appspot.com",
    messagingSenderId: "438171109425",
    appId: "1:438171109425:web:c3fa07feaa50b3fafdad10",
    measurementId: "G-QE0VQY3E11"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const authenticateWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;