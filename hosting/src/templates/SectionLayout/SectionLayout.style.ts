import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled('div')(p => ({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  padding: `120px 0`,
  ...p
}))

export const Content = styled('div')({
  flex: 1,
  margin: 'auto',
  maxWidth: theme.LARGE_VIEW,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start'
})
