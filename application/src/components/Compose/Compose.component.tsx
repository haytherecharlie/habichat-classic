import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { timestamp } from 'services/firebase'
import TextInput from 'atoms/TextInput'
import Button from 'atoms/Button'
import * as A from 'services/redux/actions'
import * as S from './Compose.style'

const Compose = () => {
  const dispatch = useDispatch()
  const { text } = useSelector(s => s.compose)

  const changeText = value => dispatch({ type: A.COMPOSE_TEXT_INPUT, value })

  const sendMessage = () =>
    dispatch({
      type: A.ADD_MESSAGES,
      value: {
        id: `${Math.random() * 100}`,
        text,
        author: '123456789',
        image: false,
        updated: { toDate: () => 12341223232 },
        created: { toDate: () => 12341223232 }
      }
    })

  return (
    <S.Compose>
      <S.TextInputWrapper>
        <TextInput text={text} changeText={changeText} />
      </S.TextInputWrapper>
      <S.ButtonWrapper>
        <Button onPress={sendMessage} />
      </S.ButtonWrapper>
    </S.Compose>
  )
}

export default Compose
