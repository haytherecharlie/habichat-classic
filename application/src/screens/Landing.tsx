import React from 'react'
import { useDispatch } from 'react-redux'
import CenterLayout from 'layouts/CenterLayout'
import PillButton from 'atoms/PillButton'
import * as A from 'services/redux/actions'

const Landing = () => {
  const dispatch = useDispatch()

  return (
    <CenterLayout>
      <PillButton onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })}>Sign In</PillButton>
      <PillButton onPress={() => dispatch({ type: A.NAVIGATE, screen: 'register' })}>Register</PillButton>
    </CenterLayout>
  )
}

export default Landing
