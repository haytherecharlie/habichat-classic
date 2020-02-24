import React, { Fragment } from 'react'
import ButtonPill from 'atoms/ButtonPill'

const Index = () => {
  return (
    <Fragment>
      <ButtonPill>Hello</ButtonPill>
      <ButtonPill invert="true">Hello</ButtonPill>
      <ButtonPill type="link" to="http://google.ca">Hello</ButtonPill>
      <ButtonPill type="link" invert="true" to="http://google.ca">Hello</ButtonPill>
    </Fragment>
  )
}

export default Index
