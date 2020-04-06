import 'animate.css'
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { TOGGLE_NAV } from 'services/redux/actions'
import PageLayout from 'templates/StyleguideLayout'
// import ButtonPill from 'atoms/ButtonPill'
// import Link from 'atoms/Link'
import Logo from 'atoms/Logo'
// import Spinner from 'atoms/Spinner'
// import Hamburger from 'atoms/Hamburger'
// import Modal from 'atoms/Modal'
import Text from 'atoms/Text'

const Styleguide = () => {
  // const dispatch = useDispatch()
  // const { nav } = useSelector(s => s.app)
  return (
    <PageLayout>
      <Text type="h1">Style Guide</Text>
      <Text type="h2">Logo</Text>
      <Logo />
      <hr />
      {/* <Text type="h2">Spinner</Text>
      <hr />
      <Spinner />
      <hr />
      <Text type="h2">Hamburger</Text>
      <hr />
      <Hamburger nav={nav} onClick={() => dispatch({ type: TOGGLE_NAV })} />
      <hr />
      <Text type="h2">ButtonPill</Text>
      <hr />
      <ButtonPill>Hello</ButtonPill>
      <Text type="h2">Modal</Text>
      <hr />
      <Modal buttonText="Toggle Modal" name="test" body={<div>Hey Modal</div>} invert={true} />
      <hr />
      <Text type="h2">Link</Text>
      <hr />
      <ButtonPill type="link" invert={true} to="http://google.ca">
        Google
      </ButtonPill>
      <Link to="http://google.ca">Google</Link>
      <hr />
      <Text type="h2">Text</Text>
      <hr />
      <Text>I'm body text.</Text>
      <Text type="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident nulla obcaecati, dolorum necessitatibus esse saepe quam porro totam
        cupiditate quae, fuga voluptate optio consectetur in eaque, quod repudiandae inventore.
      </Text> */}
    </PageLayout>
  )
}

export default Styleguide
