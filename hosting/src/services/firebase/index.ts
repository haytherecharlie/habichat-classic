import firebase from 'gatsby-plugin-firebase'

export const auth = firebase.auth
export const db = firebase.firestore
export const ts = db.Timestamp
export const ga = firebase.analytics
