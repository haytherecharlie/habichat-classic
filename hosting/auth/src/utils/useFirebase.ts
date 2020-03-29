import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import * as serviceAccount from '../config/service-account.json'

const useFirebase = () => {
  const [fb, setFb] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
      setFb(firebase)
    }
  }, [])

  return fb
}

export default useFirebase
