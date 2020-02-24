import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Header = styled('header')({
  minWidth: `310px`,
  width: `100%`,
  height: theme.HEADER_HEIGHT,
  background: theme.BACKGROUND_COLOR,
  position: 'fixed',
  top: 0,
  left: 0,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  borderBottom: `1px solid ${theme.ACCENT_COLOR}`,
  borderTop: `5px solid ${theme.ACCENT_COLOR}`
})

export const Wrapper = styled('div')({
  flex: 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: (p) => p.align || `center`
})

export const HamburgerMenu = styled('div')({
  height: `17px`,
  width: `20px`,
  position: `relative`,
  cursor: `pointer`,
  margin: `0 20px`
})

const defaultLineStyle = {
  width: `100%`,
  height: `3px`,
  background: `#181E38`,
  borderRadius: `5px`,
  position: `absolute`
}

const midLine = `7px`

export const TopLine = styled('div')({
  ...defaultLineStyle,
  transition: `transform .5s, top .5s`,
  top: (p) => (p.open ? midLine : `0px`),
  transform: (p) => (p.open ? `rotate(45deg)` : `none`)
})

export const MidLine = styled('div')({
  ...defaultLineStyle,
  transition: `display .5s`,
  top: midLine,
  display: (p) => (p.open ? `none` : `flex`)
})

export const BottomLine = styled('div')({
  ...defaultLineStyle,
  transition: `transform .5s, top .5s`,
  top: (p) => (p.open ? midLine : `14px`),
  transform: (p) => (p.open ? `rotate(-45deg)` : `none`)
})
