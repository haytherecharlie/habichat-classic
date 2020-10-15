import React, { useState } from 'react'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './RegistrationForm.style'

const RegistrationForm = () => {
  const [email, setEmail] = useState({ outline: `rgba(96,57,169, 0.5)`, value: '', valid: false })

  function handleChangeEmail(value) {
    return /\S+@\S+\.\S+/.test(value)
      ? setEmail({ outline: `rgba(50,205,50, 0.5)`, value, valid: true })
      : setEmail({ outline: `rgba(96,57,169, 0.5)`, value, valid: false })
  }

  function handleSubmit() {
    console.log(email)
  }

  return (
    <S.RegistrationForm>
      <S.Input
        autoComplete="email"
        value={email.value}
        onChange={e => handleChangeEmail(e.target.value)}
        name="emailAddress"
        placeholder="Enter your email address"
        outline={email.outline}
        type="email"
      />
      <Link type="button" onClick={handleSubmit}>
        <ButtonPill style={{ width: `100%` }} >
          <Text
            size="XS"
            text="register-invite-button"
            bold
            style={{ color: '#FFF', textAlign: 'center', margin: `12px 15px 10px 15px` }}
          />
        </ButtonPill>
      </Link>
    </S.RegistrationForm>
  )
}

export default RegistrationForm
