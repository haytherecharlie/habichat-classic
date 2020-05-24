import styled from 'styled-components'
import theme from 'assets/theme'

export const ComposePost = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  width: `100%`,
  paddingTop: 5,
  paddingLeft: 1,
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
  fontWeight: 300,
  resize: `none`,
  '&::placeholder': {
    color: `rgba(255, 255, 255, 0.7)`,
    fontWeight: 300
  },
  '&:focus': {
    outline: 'none'
  }
})
