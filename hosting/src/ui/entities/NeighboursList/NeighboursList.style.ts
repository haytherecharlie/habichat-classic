import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Neighbours = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: 10
})

export const ScrollList = styled('div')({
  minHeight: 65,
  width: `100%`,
  overflowX: 'scroll',
  padding: `10px 0px 15px 0px`
})
