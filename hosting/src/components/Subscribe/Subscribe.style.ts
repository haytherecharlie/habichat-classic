import styled from 'styled-components'
import theme from 'assets/theme'

export const Subscribe = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '5rem',
  padding: `40px 20px`
})

export const InputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: `100%`,
  maxWidth: 600
})

export const Input = styled('input')({
  border: `1px solid ${theme.BRAND_COLOR}`,
  background: theme.OPAQUE_BRAND,
  borderRadius: 25,
  height: 35,
  fontSize: 15,
  minWidth: 250,
  textAlign: 'center',
  '&:focus': {
    outline: `none`,
    boxShadow: `0 0 3px 0 #ddd`
  }
})

export const Button = styled('button')({
  borderRadius: 25,
  height: 40,
  fontSize: 15,
  fontWeight: 600,
  color: '#FFF',
  background: theme.BRAND_COLOR,
  border: 'none',
  marginTop: '1rem'
})
