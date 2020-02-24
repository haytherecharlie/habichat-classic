import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled('div')({
  minHeight: `100vh`,
  width: `100vw`,
  fontFamily: 'Tahoma, Geneva, sans-serif',
  background: theme.BACKGROUND_COLOR,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})

export const Panel = styled('div')({
  overflow: 'hidden',
  flex: (p) => p.flex,
  background: (p) => (p.center ? theme.BACKGROUND_COLOR : theme.BACKGROUND_COLOR),
  maxWidth: (p) => (p.center ? 700 : `100%`),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  position: 'relative',
  [`${theme.MEDIUM_QUERY}`]: {
    display: (p) => (p.center ? 'flex' : 'none'),
    flex: 1,
    boxShadow: `none`
  }
})

export const Loading = styled('div')({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Main = styled('main')({
  flex: 1,
  paddingTop: (p) => (p.type === 'page' ? theme.HEADER_HEIGHT : `0px`),
  minWidth: `310px`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  overflow: 'scroll'
})
