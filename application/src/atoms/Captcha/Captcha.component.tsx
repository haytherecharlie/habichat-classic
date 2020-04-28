import React, { useState } from 'react'
import WebView from 'react-native-webview'
import theme from 'assets/theme'
import * as S from './Captcha.style'

const Captcha = ({ webRef, update, fullHeight }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <S.Captcha loaded={loaded} fullHeight={fullHeight}>
      <WebView
        ref={webRef}
        keyboardDisplayRequiresUserAction={false}
        source={{ uri: `https://habi.chat/recaptcha/?dm=${theme.DARK_MODE}` }}
        javaScriptEnabled={true}
        onMessage={({ nativeEvent }) => update({ type: 'token', value: JSON.parse(nativeEvent.data) })}
        domStorageEnabled
        onLoad={() => setTimeout(() => setLoaded(true), 75)}
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
