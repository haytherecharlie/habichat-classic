import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const PostCard = styled('div')({
  width: `100%`,
  minHeight: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  padding: 10,
  margin: `10px 0`
})

export const TextInfo = styled('div')({
  flex: 1,
  width: `100%`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})

export const TiRight = styled('div')({
  width: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-start'
})

export const TiMiddle = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})

export const Author = styled('div')({})

export const Body = styled('div')({
  paddingTop: 5,
  flex: 1
})

export const TiLeft = styled('div')({
  paddingRight: 10
})

export const Media = styled('div')({
  background: 'green'
})

export const Discussion = styled('div')({
  background: 'blue'
})
