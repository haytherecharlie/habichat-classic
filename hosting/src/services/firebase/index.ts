import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
  apiKey: 'AIzaSyBtoN3SwYW-RMea_dENnpzGaKHu5iIb3I8',
  authDomain: 'habichat-68ebf.firebaseapp.com',
  databaseURL: 'https://habichat-68ebf.firebaseio.com',
  projectId: 'habichat-68ebf',
  storageBucket: 'habichat-68ebf.appspot.com',
  messagingSenderId: '690820112771',
  appId: '1:690820112771:web:1fa1fa2b720226c2b016b6',
  measurementId: 'G-0GTHSF492W'
})

export const db = firebase.firestore()
export const hd = firebase.storage().ref()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
