import styled from 'styled-components'
import DownArrow from 'react-ionicons/lib/IosArrowDown'
import theme from 'ui/assets/theme'

export const LoginForm = styled('div')({
  flex: 1,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  padding: 20,
  width: `100%`,
  maxWidth: theme.SMALL_VIEW,
  margin: `0 auto`
})

export const Row = styled('div')(({ style }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  ...style
}))

export const BouncingArrow = styled(DownArrow)({
  width: 50,
  height: 50,
  margin: `0px auto`,
  animation: `bounce 1s infinite alternate`,
  '@keyframes bounce': { from: { transform: `translateY(0px)` }, to: { transform: `translateY(-15px)` } }
})

export const Input = styled('input')({
  background: `rgba(255, 255, 255, 0.5)`,
  height: 40,
  borderRadius: `5px`,
  border: `none`,
  padding: `0px 10px`,
  margin: `10px 0px`,
  color: `#FFF`,
  '&::placeholder': {
    color: `rgba(255, 255, 255, 0.7)`
  }
})

export const LogIn = styled('button')({
  height: 40,
  width: `100%`,
  borderRadius: `5px`,
  fontSize: theme.FONT_S,
  border: `1px solid #FFF`,
  background: 'none',
  margin: `10px 0px`,
  color: `#FFF`,
  cursor: 'pointer',
  '&::placeholder': {
    color: `rgba(255, 255, 255, 0.7)`
  }
})

export const SignUp = styled('a')({
  color: `rgba(255, 255, 255, 0.75)`,
  textDecoration: 'underline',
  fontSize: theme.FONT_S,
  margin: `25px auto 0 auto`,
  cursor: 'pointer'
})