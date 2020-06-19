import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Modal = styled('div')(P => ({
  animation: 'fadeIn',
  animationDuration: `.3s`,
  zIndex: 1000,
  position: 'fixed',
  left: 0,
  top: 0,
  height: `100%`,
  width: `100%`,
  background: theme.DIRTY_BACKGROUND,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  ...P.style
}))
