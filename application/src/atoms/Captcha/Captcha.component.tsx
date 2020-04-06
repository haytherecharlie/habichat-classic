import React, { useState } from 'react'
import WebView from 'react-native-webview'
import theme from 'assets/theme'
import * as S from './Captcha.style'

const Captcha = ({ webView, onMessage }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <S.Captcha loaded={loaded}>
      <WebView
        ref={webView}
        keyboardDisplayRequiresUserAction={false}
        source={{ uri: `https://habi.chat/recaptcha/?dm=${theme.DARK_MODE}`, baseUrl: 'https://habi.chat/app-captcha/' }}
        javaScriptEnabled={true}
        onMessage={msg => onMessage(msg.nativeEvent.data)}
        domStorageEnabled
        onLoad={() => setTimeout(() => setLoaded(true), 1000)}
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
