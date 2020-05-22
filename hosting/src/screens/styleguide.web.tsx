import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPill from 'atoms/ButtonPill'
import ChangeLocale from 'atoms/ChangeLocale'
import Hamburger from 'atoms/Hamburger'
import Link from 'atoms/Link'
import Logo from 'atoms/Logo'
import Spinner from 'atoms/Spinner'
import Text from 'atoms/Text'
import PageLayout from 'layouts/PageLayout'
import theme from 'assets/theme'
import * as A from 'services/redux/actions'

const StyleGuide = () => {
  const dispatch = useDispatch()
  const { nav } = useSelector(s => s.app)

  return (
    <PageLayout page="styleguide" crawl={false} style={{ paddingTop: 20, paddingBottom: 20 }}>
      {/* BUTTONPILL COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="ButtonPill Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <Link type="button" onClick={() => alert('habichat!')}>
            <ButtonPill text="Inverted Button" invert unique />
          </Link>
          <Link type="button" onClick={() => alert('habichat!')}>
            <ButtonPill text="Regular Button" unique />
          </Link>
        </div>
      </section>

      {/* CHANGELOCALE COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="ChangeLocale Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <ChangeLocale />
        </div>
      </section>

      {/* HAMBURGER COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="Hamburger Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <Hamburger nav={nav} onClick={() => dispatch({ type: A.TOGGLE_NAV })} />
        </div>
      </section>

      {/* LINK COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="Link Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <Link type="internal" href="/dashboard">
            <Text size="S" text="Internal Link" link unique />
          </Link>
          <Link type="external" href="https://charleshay.com">
            <Text size="S" text="External Link" link unique />
          </Link>
        </div>
      </section>

      {/* LOGO COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="Logo Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <Logo />
        </div>
      </section>

      {/* SPINNER COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="Spinner Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <Spinner />
        </div>
      </section>

      {/* TEXT COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="Text Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <Text size="XL" text="This is XL header" bold unique />
          <Text size="L" text="This is L header" bold unique />
          <Text size="M" text="This is M header" bold unique />
          <Text size="S" text="This is S header" bold unique />
          <Text size="XS" text="This is XS header" bold unique />
          <br />
          <Text size="XL" text="This is XL text" unique />
          <Text size="L" text="This is L text" unique />
          <Text size="M" text="This is M text" unique />
          <Text size="S" text="This is S text" unique />
          <Text size="XS" text="This is XS text" unique />
        </div>
      </section>
    </PageLayout>
  )
}

export default StyleGuide
