import styled from 'styled-components'
import theme from 'assets/theme'

export const Nav = styled('nav')({
  zIndex: 100,
  flex: 1,
  display: 'flex',
  width: `100%`,
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  paddingLeft: 50,
  paddingTop: 5,
  [theme.LARGE_QUERY]: {
    position: 'absolute',
    top: `calc(${theme.HEADER_HEIGHT} - 5px)`,
    left: 0,
    width: `100vw`,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.BACKGROUND_COLOR,
    paddingLeft: 0,
    paddingTop: 0
  }
})

export const Links = styled('div')({
  width: 300,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.LARGE_QUERY]: {
    width: `100vw`,
    flexDirection: 'column',
    alignItems: 'space-around',
    height: 100,
    paddingTop: 10,
    paddingBottom: 10
  }
})

export const Locale = styled('div')({
  [theme.LARGE_QUERY]: {
    paddingBottom: 10
  }
})
