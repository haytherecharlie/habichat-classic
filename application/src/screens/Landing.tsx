import React from 'react'
import { useDispatch } from 'react-redux'
import { TouchableOpacity, Text } from 'react-native'
import CenterLayout from 'layouts/CenterLayout'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'

const Landing = () => {
  const dispatch = useDispatch()
  const onPress = () => dispatch({ type: A.NAVIGATE, screen: 'register' })
  
  return (
    <CenterLayout>
      <TouchableOpacity onPress={onPress}>
        <Text>Register</Text>
      </TouchableOpacity>
    </CenterLayout>
  )
}

export default Landing
