import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const PostsList = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  margin: `0 10px`,
  overflowX: 'hidden'
})

export const ScrollList = styled('div')({
  marginTop: 5,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})
