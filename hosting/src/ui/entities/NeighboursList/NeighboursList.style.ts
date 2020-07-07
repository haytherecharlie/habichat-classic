import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Neighbours = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: 5
})

export const ScrollList = styled('div')({
  marginTop: 5,
  minHeight: 65,
  width: `100%`,
  overflowX: 'scroll',
  padding: `5px 0px 15px 0px`
})
