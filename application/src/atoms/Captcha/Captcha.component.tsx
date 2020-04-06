import React, { useState } from 'react'
import WebView from 'react-native-webview'
import theme from 'assets/theme'
import * as S from './Captcha.style'

const Captcha = ({ webRef, update }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <S.Captcha loaded={loaded}>
      <WebView
        ref={webRef}
        keyboardDisplayRequiresUserAction={false}
        source={{ uri: `https://habi.chat/recaptcha/?dm=${theme.DARK_MODE}` }}
        javaScriptEnabled={true}
        onMessage={({ nativeEvent }) => update({ type: 'token', value: JSON.parse(nativeEvent.data) })}
        domStorageEnabled
        onLoad={() => setTimeout(() => setLoaded(true), 50)}
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
