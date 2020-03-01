import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import initialize from 'services/api/initialize'
import Spinner from 'atoms/Spinner'
import * as A from 'services/redux/actions'
import * as S from './Initialize.style'

const Initialize = () => {
  const dispatch = useDispatch()
  const { application, messages, members, community } = useSelector(s => s)

  useEffect(() => {
    initialize()
      .then(value => dispatch({ type: A.INTIAILIZE_APP, value }))
      .catch(err => alert(err))
  }, [])

  useEffect(() => {
    if (community && messages && members && application.initialized) {
      alert('ready to roll')
    }
  }, [application])

  return (
    <S.Wrapper>
      <Spinner />
    </S.Wrapper>
  )
}

export default Initialize
