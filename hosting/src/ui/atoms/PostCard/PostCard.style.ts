import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const PostCard = styled('div')({
  margin: `5px 0`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  animation: 'slideInLeft',
  animationDuration: `.3s`
})

export const LeftCard = styled('div')({
  marginLeft: 20,
  width: 20,
  borderLeft: `1px solid ${theme.BRAND_COLOR}`,
  borderTop: `1px solid ${theme.BRAND_COLOR}`,
  borderBottom: `1px solid ${theme.BRAND_COLOR}`,
  borderTopLeftRadius: theme.CARD_RADIUS,
  borderBottomLeftRadius: theme.CARD_RADIUS
})

export const RightCard = styled('div')({
  flex: 1,
  flexDirection: 'column',
  padding: 10,
  borderRight: `1px solid ${theme.BRAND_COLOR}`,
  borderTop: `1px solid ${theme.BRAND_COLOR}`,
  borderBottom: `1px solid ${theme.BRAND_COLOR}`,
  borderTopRightRadius: theme.CARD_RADIUS,
  borderBottomRightRadius: theme.CARD_RADIUS
})

export const Row = styled('div')(P => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  '&:nth-child(2)': {},
  ...P.style
}))

export const Col = styled('div')(P => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  '&:nth-child(2)': {},
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
  alignItems: 'center',
  justifyContent: 'flex-end',
  opacity: 0.5
})
