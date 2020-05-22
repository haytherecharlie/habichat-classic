import styled from 'styled-components'
import theme from 'assets/theme'

export const Pill = styled('div')({
  background: p => (p.invert ? theme.WHITE : theme.BRAND_COLOR),
  borderRadius: theme.PILL_RADIUS,
  border: p => `2px solid ${p.invert ? theme.BRAND_COLOR : theme.WHITE}`,
  padding: 5,
  display: 'flex',
  justifyContent: 'center'
})
