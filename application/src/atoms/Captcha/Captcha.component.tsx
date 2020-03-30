import React, { useState, useEffect, useRef } from 'react'
import WebView from 'react-native-webview'
import theme from 'assets/theme'
import * as S from './Captcha.style'

const Captcha = ({ setToken }) => {
  const webRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const darkMode = theme.DARK_MODE ? 'dark' : 'light'

  const respond = () => {
    webRef.current.injectJavaScript('alert("HELLO")')
  }

  return (
    <S.Captcha loaded={loaded}>
      <WebView
        ref={webRef}
        keyboardDisplayRequiresUserAction={false}
        source={{ uri: `http://192.168.0.13:3000/?mode=${darkMode}&webview=true`, baseUrl: 'http://192.168.0.13:3000/' }}
        javaScriptEnabled={true}
        onMessage={msg => respond(msg.nativeEvent.data)}
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
