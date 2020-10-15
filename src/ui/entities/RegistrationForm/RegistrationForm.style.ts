import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const RegistrationForm = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Input = styled.input(p => ({
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
