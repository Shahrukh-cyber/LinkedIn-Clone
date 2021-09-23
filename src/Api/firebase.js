import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB9E4J-EwrKgWf0XaT5Pvr5rGhNuyApjFE',
  authDomain: 'linkedinclone-eb672.firebaseapp.com',
  projectId: 'linkedinclone-eb672',
  storageBucket: 'linkedinclone-eb672.appspot.com',
  messagingSenderId: '302258511749',
  appId: '1:302258511749:web:f5e03b8bde994c028caeec',
}
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth();

// auth.currentUser()
// const createUser = createUserWithEmailAndPassword()
// const signout = signOut()
// const signIn = signInWithEmailAndPassword()
export { firebaseApp, db, auth }
