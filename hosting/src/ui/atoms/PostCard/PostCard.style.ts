import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const PostCard = styled('article')({
  margin: `5px 0`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})

export const Card = styled('div')({
  background: theme.CLEAN_BACKGROUND,
  borderRadius: theme.CARD_RADIUS,
  marginLeft: 20,
  boxShadow: `0 2px 2px rgba(0,0,0,0.2)`
})

export const LeftCard = styled('div')({
  background: 'orange',
  borderTopLeftRadius: theme.CARD_RADIUS,
  borderBottomLeftRadius: theme.CARD_RADIUS
})

export const RightCard = styled('div')({
  flex: 1,
  flexDirection: 'column',
  padding: 10,
  borderTopRightRadius: theme.CARD_RADIUS,
  borderBottomRightRadius: theme.CARD_RADIUS
})

export const Row = styled('div')(P => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  ...P.style
}))

export const Col = styled('div')(P => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  ...P.style
}))

export const CommentButton = styled('div')({
  flex: 1,
  display: 'flex',
  minWidth: 100
})

export const ServerCheck = styled('div')({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  opacity: 0.3
})
