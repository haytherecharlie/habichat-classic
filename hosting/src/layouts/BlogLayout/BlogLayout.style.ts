import styled from 'styled-components'
import theme from 'assets/theme'

export const BlogLayout = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const StripeWrapper = styled('div')({
  borderTop: `1px solid ${theme.BACKGROUND_COLOR}`,
  overflow: `hidden`,
  width: `100%`,
  position: 'relative',
  [`@media only screen and (max-width: ${theme.SMALL_VIEW}px)`]: { height: 100 },
  [`@media only screen and (min-width: ${theme.SMALL_VIEW}px)`]: { height: 100 },
  [`@media only screen and (min-width: ${theme.MEDIUM_VIEW}px)`]: { height: 120 },
  [`@media only screen and (min-width: ${theme.LARGE_VIEW}px)`]: { height: 140 }
})

export const Stripe = styled('div')({
  position: `absolute`,
  top: 0,
  left: 0,
  width: `100%`,
  background: theme.BRAND_COLOR,
  transformOrigin: `top right`,
  zIndex: 500,
  [`@media only screen and (max-width: ${theme.SMALL_VIEW}px)`]: {
    height: 80,
    transform: `skewY(7deg)`
  },
  [`@media only screen and (min-width: ${theme.SMALL_VIEW}px)`]: {
    height: 100,
    transform: `skewY(6deg)`
  },
  [`@media only screen and (min-width: ${theme.MEDIUM_VIEW}px)`]: {
    height: 120,
    transform: `skewY(5deg)`
  },
  [`@media only screen and (min-width: ${theme.LARGE_VIEW}px)`]: {
    height: 140,
    transform: `skewY(4deg)`
  }
})
