import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled('div')({
  height: `75vh`,
  background: theme.BRAND_COLOR,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg")`,
  backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  position: `relative`
})
