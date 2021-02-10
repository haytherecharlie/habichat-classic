import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Neighbours = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  margin: `5px 0 10px 0`
})

export const ScrollList = styled('div')({
  width: `100%`,
  overflowX: 'scroll',
  padding: `5px 0`
})

export const Neighbour = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 15
})
