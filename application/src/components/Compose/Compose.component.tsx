import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import newMessage from 'services/api/newMessage'
import TextInput from 'atoms/TextInput'
import Button from 'atoms/Button'
import theme from 'assets/theme'
import * as A from 'services/redux/actions'
import * as S from './Compose.style'

const Compose = () => {
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState('')

  const sendMessage = () => {
    const value = newMessage(inputText)
    dispatch({ type: A.ADD_MESSAGES, value })
    return setInputText('')
  }

  return (
    <S.Compose>
      <S.BasicWrapper>
        <S.TextInputWrapper>
          <TextInput value={inputText} onChangeText={setInputText} />
        </S.TextInputWrapper>
        <S.ButtonWrapper>
          <Button onPress={sendMessage}>
            <S.Icon name="ios-send" color={theme.INVERSE_COLOR} size={20} />
          </Button>
        </S.ButtonWrapper>
      </S.BasicWrapper>
    </S.Compose>
  )
}

export default Compose
