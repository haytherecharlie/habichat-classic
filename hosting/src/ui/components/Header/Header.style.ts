import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const AppHeader = styled('header')({
  zIndex: 8000,
  background: theme.CLEAN_BACKGROUND,
  position: 'fixed',
  top: 0,
  left: 0,
  width: `100vw`,
  height: theme.HEADER_HEIGHT,
  borderTop: `5px solid ${theme.BRAND_COLOR}`,
  display: 'flex',
  alignItems: `center`,
  justifyContent: 'center',  '&:after': {
    position: 'fixed',
    content: "''",
    width: `100vw`,
    height: 1,
    background: `-webkit-linear-gradient(left, ${theme.HABICHAT_PURPLE}, ${theme.HABICHAT_INDIGO}, ${theme.HABICHAT_PURPLE})`,
    backgroundColor: theme.HABICHAT_PURPLE,
    backgroundSize: 'contain',
    top: theme.HEADER_HEIGHT,
    left: 0
  }
})

export const Header = styled('header')({
  zIndex: 8000,
  background: theme.DIRTY_BACKGROUND,
  position: 'fixed',
  top: 0,
  left: 0,
  width: `100vw`,
  height: theme.HEADER_HEIGHT,
  borderBottom: `1px solid ${theme.BRAND_COLOR}`,
  borderTop: `5px solid -webkit-linear-gradient(left, ${theme.HABICHAT_PINK}, ${theme.HABICHAT_INDIGO}`,
  display: 'flex',
  alignItems: `stretch`,
  justifyContent: 'center'
})

export const Column = styled('div')(style => ({
  flex: 1,
  display: 'flex',
  ...style
}))
