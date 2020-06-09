import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const PostCard = styled('div')({
  margin: `5px 0`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  animation: 'slideInLeft',
  animationDuration: `.3s`,
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

export const CommentsPane = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 8,
  width: 200
})

export const TextPane = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})
