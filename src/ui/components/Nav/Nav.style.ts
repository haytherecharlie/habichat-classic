import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Nav = styled('nav')({
  zIndex: 10,
  flex: 1,
  display: 'flex',
  width: `100%`,
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  padding: `10px 0 10px 50px`,
  [`@media only screen and (max-width: ${theme.LARGE_VIEW}px)`]: {
    position: 'absolute',
    top: theme.HEADER_HEIGHT - 5,
    left: 0,
    width: `100vw`,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.DIRTY_BACKGROUND,
    padding: `10px 0`,
    borderBottom: `1px solid ${theme.BRAND_COLOR}`
  }
})

export const Links = styled('div')({
  width: 350,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  [`@media only screen and (max-width: ${theme.LARGE_VIEW}px)`]: {
    width: `100vw`,
    flexDirection: 'column',
    alignItems: 'space-around'
  }
})

export const Locale = styled('div')({
  width: 100,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  margin: 0,
  [`@media only screen and (max-width: ${theme.LARGE_VIEW}px)`]: {
    height: 25,
    margin: `10px 0`,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  }
})
