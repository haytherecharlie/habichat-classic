import React from 'react'
import Captcha from 'atoms/Captcha'
import PhoneInput from 'atoms/PhoneInput'
import CodeInput from 'atoms/CodeInput'
import Header from 'components/Header'
import ScrollLayout from 'layouts/ScrollLayout'
import TopLayout from 'layouts/TopLayout'
import usePhoneAuthReducer from 'utils/hooks/usePhoneAuthReducer'

const SignInPhone = () => {
  const [field, update] = usePhoneAuthReducer()

  return (
    <TopLayout>
      <Header.Auth title="sign-in" />
      {field.step.value === 'phone' && (
        <ScrollLayout>
          <PhoneInput phone={field.phone} update={update} webRef={field.webview.ref} />
          <Captcha update={update} webRef={field.webview.ref} />
        </ScrollLayout>
      )}
      {field.step.value === 'code' && (
        <ScrollLayout>
          <CodeInput code={field.code} token={field.token} update={update} />
        </ScrollLayout>
      )}
    </TopLayout>
  )
}

export default SignInPhone
