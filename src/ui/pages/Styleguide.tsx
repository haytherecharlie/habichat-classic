import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import theme from 'ui/assets/theme'
import ButtonPill from 'ui/atoms/ButtonPill'
import ChangeLocale from 'ui/atoms/ChangeLocale'
import Hamburger from 'ui/atoms/Hamburger'
import Link from 'ui/atoms/Link'
import Logo from 'ui/atoms/Logo'
import Spinner from 'ui/atoms/Spinner'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'
import * as A from 'services/redux/actions'

const StyleGuide = () => {
  const dispatch = useDispatch()
  const { nav } = useSelector(s => s.ui)

  return (
    <PageLayout page="styleguide" crawl={false} style={{ paddingTop: 20, paddingBottom: 20 }}>
      {/* BUTTONPILL COMPONENT */}
      <section
        style={{
          border: `1px solid ${theme.BRAND_COLOR}`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10
        }}>
        <Text size="M" text="ButtonPill Component" style={{ textTransform: 'uppercase' }} bold unique />
        <div style={{ borderTop: `1px solid #CCC`, marginTop: 10, paddingTop: 10, flexDirection: 'column' }}>
          <ButtonPill style={{ margin: `5px 10px` }}>
            <Text size="M" text="REGULAR BUTTON" bold unique style={{ color: theme.WHITE }} />
          </ButtonPill>
          <ButtonPill invert style={{ margin: `5px 10px` }}>
            <Text size="M" text="INVERTED BUTTON" bold unique />
          </ButtonPill>
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
          <Hamburger nav={nav} onClick={() => dispatch({ type: A.NAV })} />
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
          <Logo type="logomark" />
          <Logo type="logotype" />
          <Logo type="combomark" />
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
          <Text size="XL" text="This is XL header LLLLggg" bold unique />
          <Text size="L" text="This is L header LLLLggg" bold unique />
          <Text size="M" text="This is M header LLLLggg" bold unique />
          <Text size="S" text="This is S header LLLLggg" bold unique />
          <Text size="XS" text="This is XS header LLLLggg" bold unique />
          <br />
          <Text size="XL" text="This is XL text LLLLggg" unique />
          <Text size="L" text="This is L text LLLLggg" unique />
          <Text size="M" text="This is M text LLLLggg" unique />
          <Text size="S" text="This is S text LLLLggg" unique />
          <Text size="XS" text="This is XS text LLLLggg" unique />
        </div>
      </section>
    </PageLayout>
  )
}

export default StyleGuide
