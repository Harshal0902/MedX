import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyD8US5qo2Rg6noTs_P2w5cATKPXTmg-M_Q",
  authDomain: "medx-7db95.firebaseapp.com",
  projectId: "medx-7db95",
  storageBucket: "medx-7db95.appspot.com",
  messagingSenderId: "490963388453",
  appId: "1:490963388453:web:7a157ef4e23ab2feda97cc",
  measurementId: "G-25N43ZQ8DE"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
