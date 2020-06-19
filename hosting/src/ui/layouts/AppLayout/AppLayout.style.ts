import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const AppLayout = styled('div')({
  width: `100vw`,
  minWidth: 300,
  height: `100%`,
  minHeight: `100vh`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: `#F8F8F8`
})

export const Main = styled('main')(P => ({
  paddingBottom: theme.FOOTER_HEIGHT + 10,
  position: 'relative',
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  paddingRight: 15,
  paddingLeft: 15,
  ...P.style
}))
