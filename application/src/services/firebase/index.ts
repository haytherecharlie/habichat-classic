import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import * as serviceAccount from 'config/service-account.json'

firebase.initializeApp({
  apiKey: serviceAccount.apiKey,
  authDomain: serviceAccount.authDomain,
  databaseURL: serviceAccount.databaseURL,
  projectId: serviceAccount.projectId,
  storageBucket: serviceAccount.storageBucket,
  messagingSenderId: serviceAccount.messagingSenderId,
  appId: serviceAccount.appId,
  measurementId: serviceAccount.measurementId
})

export const fb = firebase
export const auth = firebase.auth()
export const db = firebase.firestore()
export const hd = firebase.storage().ref()
export const timestamp = firebase.firestore.Timestamp
