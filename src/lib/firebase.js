import { seedDatabase } from '../seed';
// import  FieldValue  from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
	appId: process.env.AREACT_APP_APP_ID,
};

const fireBase = firebase.initializeApp(firebaseConfig);
const FieldValue = firebase.firestore.FieldValue;
const auth = { getAuth, createUserWithEmailAndPassword, updateProfile };

//seed database
//seedDatabase(fireBase);

export { fireBase, FieldValue, auth };
