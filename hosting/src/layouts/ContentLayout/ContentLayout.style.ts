import styled from 'styled-components'

export const Center = styled('div')(({ style }) => ({
  width: `100%`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...style
}))

export const Top = styled('div')(({ style }) => ({
  width: `100%`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  ...style
}))

export const Padding = styled('div')({
  paddingLeft: 20,
  paddingRight: 20,
  flexDirection: 'column',
  width: `100%`,
  flex: 1
})
