import styled from 'styled-components'
import theme from 'assets/theme'

export const ComposePost = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  width: `100%`,
  marginTop: -5,
  paddingTop: 20,
  paddingBottom: 10,
  paddingLeft: 1,
  borderBottom: `1px solid ${theme.BRAND_COLOR}`,
  marginBottom: 15
})

export const Pane = styled('div')(P => ({
  display: 'flex',
  ...P.style
}))

export const TextArea = styled('div')({
  flex: 1,
  border: `1px solid ${theme.BRAND_COLOR}`,
  padding: 10,
  borderRadius: theme.CARD_RADIUS
})

export const Input = styled('textarea')({
  width: `100%`,
  border: 0,
  background: 'transparent',
  color: `#FFF`,
  fontFamily: theme.FONT_BODY,
  fontSize: theme.FONT_M,
  resize: `none`,
  '&::placeholder': {
    color: theme.OPAQUE_BRAND,
    fontWeight: 400
  },
  '&:focus': {
    outline: 'none'
  }
})
