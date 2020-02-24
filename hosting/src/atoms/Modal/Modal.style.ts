import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  height: `100vh`,
  width: `100vw`,
  zIndex: 1000
})

export const Overlay = styled('div')({
  flex: 1,
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  height: `100vh`,
  width: `100vw`,
  zIndex: 1001,
  backgroundColor: `rgba(0,0,0,0.4)`
})

export const Modal = styled('div')({
  height: `100%`,
  width: `90%`,
  maxWidth: 500,
  maxHeight: 700,
  margin: `1rem 1rem`,
  background: theme.BACKGROUND_COLOR,
  borderRadius: 15,
  position: 'relative',
  overflow: `hidden`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  zIndex: 1001,
  [theme.SMALL_QUERY]: {
    margin: `1rem 1rem`
  }
})

export const Slider = styled('div')({
  flex: 1,
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})
