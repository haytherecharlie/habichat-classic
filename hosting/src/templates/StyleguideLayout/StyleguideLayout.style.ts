import styled from 'styled-components'
import theme from 'assets/theme'

export const Wrapper = styled('div')({
  width: `100vw`,
  minWidth: 300,
  minHeight: `100vh`,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: `1rem`,
  background: theme.BACKGROUND_COLOR
})
