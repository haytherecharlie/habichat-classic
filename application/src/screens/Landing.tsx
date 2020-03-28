import React from 'react'
import { useDispatch } from 'react-redux'
import Text from 'atoms/Text'
import { TouchableOpacity } from 'react-native'
import CenterLayout from 'layouts/CenterLayout'
import * as A from 'services/redux/actions'

const Landing = () => {
  const dispatch = useDispatch()

  return (
    <CenterLayout>
      <TouchableOpacity onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({ type: A.NAVIGATE, screen: 'register' })}>
        <Text>Register</Text>
      </TouchableOpacity>
    </CenterLayout>
  )
}

export default Landing
