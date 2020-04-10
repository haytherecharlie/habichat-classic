import React from 'react'
import { openBrowserAsync } from 'expo-web-browser'
import Text from 'atoms/Text'
import * as S from './WebBrowser.style'

const WebBrowser = ({ text = '', url = '' }) => {
  return (
    <S.WebBrowser onPress={() => openBrowserAsync(url)}>
      <Text text={text} />
    </S.WebBrowser>
  )
}

export default WebBrowser
