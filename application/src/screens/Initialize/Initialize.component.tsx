import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import initialize from 'services/api/initialize'
import Spinner from 'atoms/Spinner'
import * as A from 'services/redux/actions'
import * as S from './Initialize.style'

const Initialize = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.navigate('Community')
  }, [])

  return (
    <S.Wrapper>
      <Spinner />
    </S.Wrapper>
  )
}

export default Initialize
