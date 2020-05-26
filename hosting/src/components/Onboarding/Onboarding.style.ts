import styled from 'styled-components'
import theme from 'assets/theme'

export const Onboarding = styled('section')({
  margin: 'auto',
  boxSizing: 'border-box',
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  marginTop: 100,
  marginBottom: 150
})

export const Row = styled('div')({
  zIndex: 1,
  flex: 1,
  display: `flex`,
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  margin: `0 auto`,
  maxWidth: theme.LARGE_VIEW,
  padding: `0px 20px`,
  [theme.MEDIA_QUERY('max', theme.MEDIUM_VIEW)]: {
    flexDirection: 'column',
    '&:first-child': {
      flexDirection: 'column-reverse'
    }
  }
})

export const Column = styled('div')(P => ({
  flex: 1,
  display: `flex`,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: `0 20px`,
  [theme.MEDIA_QUERY('min', theme.MEDIUM_VIEW)]: {
    '&:nth-child(2)': {
      alignItems: 'flex-end'
    }
  },
  [theme.MEDIA_QUERY('max', theme.MEDIUM_VIEW)]: {
    alignItems: 'center'
  },
  ...P.style
}))

export const Image = styled('img')({
  width: `100%`,
  maxWidth: 300,
  height: 'auto'
})

export const PurpleDiv = styled('div')({
  background: theme.BRAND_COLOR,
  marginTop: 150,
  marginBottom: 100,
  position: 'relative'
})

export const SkewedDown = styled('div')({
  position: `absolute`,
  bottom: -50,
  right: 0,
  left: 0,
  width: `100vw`,
  height: `50px`,
  background: theme.BRAND_COLOR,
  zIndex: 0,
  transform: `skewY(2deg)`,
  transformOrigin: `top right`
})

export const SkewedUp = styled('div')({
  position: `absolute`,
  top: -50,
  right: 0,
  left: 0,
  width: `100vw`,
  height: `50px`,
  background: theme.BRAND_COLOR,
  zIndex: 0,
  transform: `skewY(-2deg)`,
  transformOrigin: `top right`
})
