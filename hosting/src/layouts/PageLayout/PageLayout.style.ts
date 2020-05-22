import styled from 'styled-components'
import theme from 'assets/theme'

export const PageLayout = styled('div')({
  width: `100vw`,
  minWidth: 300,
  height: `100%`,
  minHeight: `100vh`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: theme.HEADER_HEIGHT,
  background: theme.BACKGROUND_COLOR
})

export const Main = styled('main')(P => ({
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  paddingRight: P.fullWidth ? 0 : 15,
  paddingLeft: P.fullWidth ? 0 : 15,
  ...P.style
}))
