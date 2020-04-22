import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const CommunityNav = styled(View)({
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  borderBottomWidth: .5,
  borderBottomColor: theme.BRAND_COLOR,
})

export const TopRow = styled(View)({
  width: `100%`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0 20px`
})

export const BottomRow = styled(View)({
  width: `100%`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: `0 20px 15px 20px`
})
