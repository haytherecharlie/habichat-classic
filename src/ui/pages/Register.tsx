import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const Input = styled.input(p => ({
  border: `1px solid #888`,
  borderRadius: 5,
  width: 250,
  fontSize: 14,
  padding: `10px 10px`,
  marginBottom: 20,
  ':focus': {
    outline: `none`,
    boxShadow: `0 0 0 .075rem ${p.outline}`
  }
}))

const Register = () => {
  const [email, setEmail] = useState({ outline: `rgba(96,57,169, 0.5)`, value: '' })

  function handleChangeEmail(value) {
    return /\S+@\S+\.\S+/.test(value)
      ? setEmail({ outline: `rgba(50,205,50, 0.5)`, value })
      : setEmail({ outline: `rgba(96,57,169, 0.5)`, value })
  }

  return (
    <PageLayout page="register" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeU6IfsPzAI9Lq9TmLx-LOUoGURamF-rEENfGqq0onXvy2JvA/formResponse"
        target="_self"
        method="POST"
        style={{ display: `flex`, flexDirection: `column`, alignItems: 'center' }}>
        <Input
          autoComplete="email"
          value={email.value}
          onChange={e => handleChangeEmail(e.target.value)}
          name="emailAddress"
          placeholder="Enter your email address"
          outline={email.outline}
          type="email"
        />
        <Link type="submit">
          <ButtonPill>
            <Text
              size="XS"
              text="landing-onboard-button"
              bold
              style={{ color: '#FFF', textAlign: 'center', margin: `12px 15px 10px 15px` }}
            />
          </ButtonPill>
        </Link>
      </form>
    </PageLayout>
  )
}

export default Register
