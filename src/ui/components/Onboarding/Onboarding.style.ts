import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Onboarding = styled('section')({
  margin: 'auto',
  boxSizing: 'border-box',
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  padding: `40px 0 50px 0`
})

export const Row = styled('div')({
  zIndex: 1,
  flex: 1,
  display: `flex`,
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  margin: `0 auto`,
  padding: `50px 0 75px 0`,
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  [theme.MEDIA_QUERY('max-width', theme.MEDIUM_VIEW)]: {
    flexDirection: 'column',
    '&:nth-child(even)': {
      flexDirection: 'column-reverse'
    }
  }
})

export const Column = styled('div')(P => ({
  flex: 1,
  display: `flex`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `0px 20px`,
  [theme.MEDIA_QUERY('min-width', theme.MEDIUM_VIEW)]: {
    width: `50%`,
    '&:nth-child(2)': {
      alignItems: 'flex-end'
    }
  },
  [theme.MEDIA_QUERY('max-width', theme.MEDIUM_VIEW)]: {
    width: `100%`,
    alignItems: 'center'
  },
  ...P.style
}))

export const Image = styled('img')({
  margin: `auto`,
  maxWidth: 'auto',
  height: 150,
  [theme.MEDIA_QUERY('max-width', theme.MEDIUM_VIEW)]: {
    marginBottom: 25
  }
})

export const PurpleDiv = styled('div')({
  background: theme.BRAND_COLOR,
  position: 'relative',
  margin: `50px 0px`
})

export const SkewedDown = styled('div')({
  position: `absolute`,
  bottom: -30,
  right: 0,
  left: 0,
  width: `100vw`,
  height: `50px`,
  background: theme.BRAND_COLOR,
  zIndex: 0,
  transform: `skewY(1deg)`,
  transformOrigin: `top right`
})

export const SkewedUp = styled('div')({
  position: `absolute`,
  top: -30,
  right: 0,
  left: 0,
  width: `100vw`,
  height: `50px`,
  background: theme.BRAND_COLOR,
  zIndex: 0,
  transform: `skewY(-1deg)`,
  transformOrigin: `top right`
})
