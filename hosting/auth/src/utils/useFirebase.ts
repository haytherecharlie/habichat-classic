import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const useFirebase = () => {
  const [fb, setFb] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && fb === null) {
      firebase.initializeApp({
        apiKey: 'AIzaSyC8Kwa-4RTaJO0VTW9aWnO6h8nh3guJP90',
        authDomain: 'habichat-86de6.firebaseapp.com',
        databaseURL: 'https://habichat-86de6.firebaseio.com',
        projectId: 'habichat-86de6',
        storageBucket: 'habichat-86de6.appspot.com',
        messagingSenderId: '523407045659',
        appId: '1:523407045659:web:9f6ada73d3f0f9ed16f4be',
        measurementId: 'G-Z90V46ZEDM'
      })
      setFb(firebase)
    }
  }, [])

  return fb
}

export default useFirebase
