import styled from 'styled-components'
import theme from 'assets/theme'

export const Pill = styled('div')(P => ({
  flex: 1,
  background: P.invert ? theme.WHITE : theme.BRAND_COLOR,
  borderRadius: theme.PILL_RADIUS,
  border: `2px solid ${P.invert ? theme.BRAND_COLOR : theme.WHITE}`,
  padding: `5px 20px`,
  display: 'flex',
  justifyContent: 'center',
  ...P.style
}))
