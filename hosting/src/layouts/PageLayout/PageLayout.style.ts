import styled from 'styled-components'
import theme from 'assets/theme'

export const Wrapper = styled('div')({
  width: `100vw`,
  minWidth: 300,
  height: `100%`,
  minHeight: `100vh`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flesx-start',
  justifyContent: 'flex-start',
  paddingTop: theme.HEADER_HEIGHT,
  background: theme.BACKGROUND_COLOR,
})
