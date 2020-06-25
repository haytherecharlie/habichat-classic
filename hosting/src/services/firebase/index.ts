import { pathOr } from 'ramda'
import firebase from 'firebase/app'
import firebaseApp from 'config/firebase-app.json'

firebase.initializeApp({
  apiKey: firebaseApp.apiKey,
  authDomain: firebaseApp.authDomain,
  databaseURL: firebaseApp.databaseURL,
  projectId: firebaseApp.projectId,
  storageBucket: firebaseApp.storageBucket,
  messagingSenderId: firebaseApp.messagingSenderId,
  appId: firebaseApp.appId,
  measurementId: firebaseApp.measurementId
})

export const auth = pathOr(undefined, ['auth'], firebase)
export const db = pathOr(undefined, ['firestore'], firebase)
export const ts = pathOr(undefined, ['firestore', 'Timestamp'], firebase)
export const ga = pathOr(undefined, ['analytics'], firebase)
