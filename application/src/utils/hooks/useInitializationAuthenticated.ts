import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

const useInitializationUniversal = () => {
  const [initialzation, setInitialization] = useState('pending')
  const user = useSelector(s => s.user)
  // const messages = useSelector(s => s.messages)
  // const members = useSelector(s => s.members)


  const loadUser = async () => {
    try {
      if(user.register) {
        
      }
    } catch (err) {
    }
  }

  const loadMessages = async () => {

  }

  const loadMemebers = async () => {

  }

  useEffect(() => {
    loadUser()
  }, [])

  return initialzation
}

export default useInitializationUniversal
