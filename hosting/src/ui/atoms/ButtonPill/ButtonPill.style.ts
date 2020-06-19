import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Pill = styled('div')(P => ({
  flex: 1,
  background: P.invert ? theme.WHITE : theme.BRAND_COLOR,
  borderRadius: theme.CARD_RADIUS,
  display: 'flex',
  justifyContent: 'center',
  boxShadow: `0 2px 2px rgba(0,0,0,0.2)`,
  ...P.style
}))
