import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  height: `100vh`,
  width: `100vw`,
  zIndex: 1000,
  minWidth: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
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
  backgroundColor: `rgba(0,0,0,0.7)`
})

export const Modal = styled('div')({
  height: `calc(100vh - 2rem)`,
  width: `100%`,
  margin: `1rem`,
  maxWidth: 500,
  maxHeight: 700,
  background: theme.BACKGROUND_COLOR,
  borderRadius: 15,
  position: 'relative',
  overflow: `hidden`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  zIndex: 1001,
})

export const Slider = styled('div')({
  flex: 1,
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})
