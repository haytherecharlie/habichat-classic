import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const AppLayout = styled('div')({
  width: `100vw`,
  minWidth: 300,
  minHeight: `100vh`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: `#f5f2f7`
})

export const Main = styled('main')(P => ({
  paddingTop: theme.HEADER_HEIGHT,
  paddingBottom: theme.FOOTER_HEIGHT + 10,
  position: 'relative',
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  ...P.style
}))
