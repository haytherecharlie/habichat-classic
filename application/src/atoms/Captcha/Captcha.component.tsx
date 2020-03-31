import React, { useState, useEffect, useRef } from 'react'
import { TextInput } from 'react-native'
import { fb, auth } from 'services/firebase'
import WebView from 'react-native-webview'
import theme from 'assets/theme'
import * as S from './Captcha.style'

const Captcha = () => {
  const webRef = useRef(null)
  const [editablePhone, setEditablePhone] = useState(true)
  const [editableCode, setEditableCode] = useState(true)
  const [verifyId, setVerifyId] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const darkMode = theme.DARK_MODE ? 'dark' : 'light'

  const phoneChange = phone => {
    if (phone.length === 10) webRef.current.injectJavaScript(`window.triggerCaptcha('+1${phone}')`)
  }

  const codeChange = code => {
    if (code.length === 6)
      auth.signInWithCredential(fb.auth.PhoneAuthProvider.credential(verifyId, '123123'))
      .catch(err => console.log(err))
  }

  const onMessage = stringData => {
    const data = JSON.parse(stringData)
    if (data.code === 'txtMsgError') return console.log(data.err)
    if (data.code === 'txtMsgSent') setVerifyId(data.id)
  }

  return (
    <S.Captcha loaded={loaded}>
      <TextInput style={{ backgroundColor: 'white', marginBottom: 5 }} onChangeText={phoneChange} editable={editablePhone} />
      <TextInput style={{ backgroundColor: 'white' }} onChangeText={codeChange} editable={editableCode} />
      <WebView
        ref={webRef}
        keyboardDisplayRequiresUserAction={false}
        source={{ uri: `http://192.168.0.13:3000/?mode=${darkMode}&webview=true`, baseUrl: 'http://192.168.0.13:3000/' }}
        javaScriptEnabled={true}
        onMessage={msg => onMessage(msg.nativeEvent.data)}
        domStorageEnabled
        onLoad={() => setLoaded(true)}
        automaticallyAdjustContentInsets={false}
        allowFileAccessFromFileURLs={true}
        scalesPageToFit={false}
        mixedContentMode={'always'}
        startInLoadingState={true}
      />
    </S.Captcha>
  )
}

export default Captcha
