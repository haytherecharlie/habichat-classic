import styled from 'styled-components'
import theme from 'assets/theme'

export const Wrapper = styled('div')({
  width: `100vw`,
  minWidth: 300,
  minHeight: `100vh`,
  flexDirection: 'column',
  alignItems: 'flesx-start',
  justifyContent: 'flex-start',
  paddingTop: theme.HEADER_HEIGHT,
  background: theme.BACKGROUND_COLOR
})
