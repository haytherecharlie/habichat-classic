import 'animate.css'
import React from 'react'
import PageLayout from 'templates/PageLayout'
import ButtonPill from 'atoms/ButtonPill'
import Link from 'atoms/Link'
import Logo from 'atoms/Logo'
import Spinner from 'atoms/Spinner'
import Hamburger from 'atoms/Hamburger'
import Modal from 'atoms/Modal'

const Index = () => {
  return (
    <PageLayout>
      <h2>ButtonPill</h2>
      <ButtonPill>Hello</ButtonPill>
      <ButtonPill invert={true}>Hello</ButtonPill>
      <ButtonPill type="link" to="http://google.ca">
        Hello
      </ButtonPill>
      <ButtonPill type="link" invert={true} to="http://google.ca">
        Hello
      </ButtonPill>
      <h2>Link</h2>
      <Link to="http://google.ca">Google</Link>
      <h2>Logo</h2>
      <Logo />
      <h2>Spinner</h2>
      <Spinner />
      <h2>Hamburger</h2>
      <Hamburger />
      <h2>Modal</h2>
      <Modal buttonText="Toggle Modal" name="test" body={<div>Hey Modal</div>} invert={true} />
    </PageLayout>
  )
}

export default Index
