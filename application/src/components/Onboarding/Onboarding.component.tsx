import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalLayout from 'layouts/ModalLayout'
import * as S from './Onboarding.style'

const Onboarding = () => {
  const dispatch = useDispatch()
  const { modal } = useSelector(s => s.app)

  return (
    <ModalLayout visible={modal === 'onboarding'}>
      <S.Title title="Close" onPress={() => dispatch({ type: 'MODAL', value: null })} />
    </ModalLayout>
  )
}

export default Onboarding
