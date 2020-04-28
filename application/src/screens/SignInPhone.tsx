import React from 'react'
import Captcha from 'atoms/Captcha'
import PhoneInput from 'atoms/PhoneInput'
import CodeInput from 'atoms/CodeInput'
import Header from 'components/Header'
import ContentLayout from 'layouts/ContentLayout'
import ScreenLayout from 'layouts/ScreenLayout'
import usePhoneAuthReducer from 'utils/hooks/usePhoneAuthReducer'

const SignInPhone = () => {
  const [field, update] = usePhoneAuthReducer()

  return (
    <ScreenLayout statusBarStyle="light-content" showStatusBar={true}>
      <Header.Auth title="sign-in" />
      {field.step.value === 'phone' && (
        <ContentLayout.Scroll>
          <ContentLayout.Padding>
            <PhoneInput phone={field.phone} update={update} webRef={field.webview.ref} />
          </ContentLayout.Padding>
          <Captcha update={update} webRef={field.webview.ref} fullHeight={field.phone.valid === 'valid'} />
        </ContentLayout.Scroll>
      )}
      {field.step.value === 'code' && (
        <ContentLayout.Scroll>
          <CodeInput code={field.code} token={field.token} update={update} />
        </ContentLayout.Scroll>
      )}
    </ScreenLayout>
  )
}

export default SignInPhone
