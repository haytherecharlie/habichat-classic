import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const ChangeLocale = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const FlagLink = styled('button')({
  border: 'none',
  background: 'none',
  fontSize: theme.FONT_LARGE,
  padding: 0,
  margin: 5,
  cursor: 'pointer'
})

export const Image = styled('img')({
  height: 12,
  width: 'auto',
  borderRadius: 2,
  boxShadow: `2px 2px 2px rgba(0, 0, 0, 0.1)`
})
