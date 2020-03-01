import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { timestamp } from 'services/firebase'
import TextInput from 'atoms/TextInput'
import Button from 'atoms/Button'
import theme from 'assets/styles/theme.style'
import * as A from 'services/redux/actions'
import * as S from './Compose.style'

const Compose = () => {
  const dispatch = useDispatch()
  const { text } = useSelector(s => s.compose)
  const [inputText, setInputText] = useState('')

  const changeText = value => setInputText(value)

  const sendMessage = () => {
    const time = timestamp()
    dispatch({
      type: A.ADD_MESSAGES,
      value: {
        id: `${Math.random() * 100}`,
        text: inputText,
        author: 'QB3zbwLUnTDdbzZWxdN4',
        image: null,
        updated: time,
        created: time
      }
    })
  }

  return (
    <S.Compose>
      <S.TextInputWrapper>
        <TextInput text={inputText} changeText={changeText} />
      </S.TextInputWrapper>
      <S.ButtonWrapper>
        <Button onPress={sendMessage}>
          <S.Icon name="ios-send" color={theme.INVERSE_COLOR} size={18} />
        </Button>
      </S.ButtonWrapper>
    </S.Compose>
  )
}

export default Compose
