import React, { useState } from 'react'
import WebView from 'react-native-webview'
import theme from 'assets/theme'
import * as S from './Captcha.style'

const Captcha = ({ webView, onMessage }) => {
  const [loaded, setLoaded] = useState(false)
  const darkMode = theme.DARK_MODE ? 'dark' : 'light'

  return (
    <S.Captcha loaded={loaded}>
      <WebView
        ref={webView}
        keyboardDisplayRequiresUserAction={false}
        source={{ uri: `https://habi.chat/app-captcha/?mode=${darkMode}&webview=true`, baseUrl: 'https://habi.chat/app-captcha/' }}
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
