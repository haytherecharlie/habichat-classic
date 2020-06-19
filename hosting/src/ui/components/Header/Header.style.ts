import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const AppHeader = styled('header')({
  zIndex: 8000,
  background: theme.DIRTY_BACKGROUND,
  position: 'fixed',
  top: 0,
  left: 0,
  width: `100vw`,
  height: theme.HEADER_HEIGHT,
  borderTop: `5px solid ${theme.BRAND_COLOR}`,
  display: 'flex',
  alignItems: `center`,
  justifyContent: 'center',
  boxShadow: `0 0px 2px rgba(0,0,0,0.2)`
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
  borderTop: `5px solid ${theme.BRAND_COLOR}`,
  display: 'flex',
  alignItems: `stretch`,
  justifyContent: 'center'
})

export const Column = styled('div')(style => ({
  flex: 1,
  display: 'flex',
  ...style
}))
