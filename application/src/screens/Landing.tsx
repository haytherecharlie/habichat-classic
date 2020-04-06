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
        <PillButton text="sign-in" onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })} />
      </CenterLayout>
    </TopLayout>
  )
}

export default Landing
