import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const { REACT_APP_FIREBASE_KEY } = process.env;

const config = {
    apiKey: REACT_APP_FIREBASE_KEY,
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

export const maybeCreateUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =  await userRef.get();

    if (snapShot.exists) {
        return userRef;
    }

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    } catch (error) {
        console.log('error creating user', error);
    }

    return userRef;
}

export const authenticateWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;