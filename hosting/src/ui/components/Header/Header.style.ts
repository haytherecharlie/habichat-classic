import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Header = styled('header')({
  background: theme.BACKGROUND_COLOR,
  zIndex: 120,
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

export const Responsive = styled('div')({
  position: 'relative',
  flex: p => p.flex || 1,
  height: `100%`,
  maxWidth: theme.LARGE_VIEW,
  display: `flex`,
  flexDirection: 'row',
  alignItems: `center`,
  justifyContent: p => p.justify || `space-between`,
  padding: `0 10px`
})
