import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const ReplyCard = styled('div')({
  margin: `5px 0 5px 20px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  // border: `1px solid ${theme.BRAND_COLOR}`,
  borderRadius: theme.CARD_RADIUS
})

export const LeftCard = styled('div')({
  paddingLeft: 0,
  paddingTop: 10
})

export const LineConnector = styled('div')({
  borderLeft: `1px solid ${theme.BRAND_COLOR}`,
  borderBottom: `1px solid ${theme.BRAND_COLOR}`,
  borderBottomLeftRadius: theme.CARD_RADIUS,
  width: 20,
  height: `50%`
})

export const RightCard = styled('div')({
  flex: 1,
  flexDirection: 'column',
  padding: 10,
})
