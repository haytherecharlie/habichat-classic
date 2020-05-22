import styled from 'styled-components'
import theme from 'assets/theme'

export const Center = styled('div')(({ style }) => ({
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...style
}))

export const Top = styled('div')(({ style }) => ({
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  ...style
}))

export const Padding = styled('div')({
  paddingLeft: 10,
  paddingRight: 10,
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'column',
  flex: 1
})
