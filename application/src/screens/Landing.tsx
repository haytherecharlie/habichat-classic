import React from 'react'
import { useDispatch } from 'react-redux'
import PillButton from 'atoms/PillButton'
import Header from 'components/Header'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'
import * as A from 'services/redux/actions'

const Landing = () => {
  const dispatch = useDispatch()
  
  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout justify="center">
        <PillButton text="sign-in" onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })} />
      </ContentLayout>
    </ScreenLayout>
  )
}

export default Landing
