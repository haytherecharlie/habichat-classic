import React from 'react'
import { useDispatch } from 'react-redux'
import PillButton from 'atoms/PillButton'
import Header from 'components/Header'
import TopLayout from 'layouts/TopLayout'
import CenterLayout from 'layouts/CenterLayout'
import * as A from 'services/redux/actions'

const Landing = () => {
  const dispatch = useDispatch()

  return (
    <TopLayout>
      <Header.Blank />
      <CenterLayout>
        <PillButton onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })}>SIGN IN</PillButton>
        <PillButton onPress={() => dispatch({ type: A.NAVIGATE, screen: 'register' })}>REGISTER</PillButton>
      </CenterLayout>
    </TopLayout>
  )
}

export default Landing