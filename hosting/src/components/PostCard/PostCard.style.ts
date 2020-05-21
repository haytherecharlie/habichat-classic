import styled from 'styled-components'
import theme from 'assets/theme'

export const PostCard = styled('div')({
  margin: `5px 0`,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  minHeight: 75
})

export const LeftCard = styled('div')({
  marginLeft: 25,
  width: 25,
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

export const DisplayPhoto = styled('img')({
  height: 50,
  width: 50,
  border: `1px solid ${theme.BRAND_COLOR}`,
  borderRadius: `50%`,
  marginLeft: -25,
  marginTop: 10
})
