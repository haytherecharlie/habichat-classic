import styled from 'styled-components'
import theme from 'assets/theme'
import { Link } from 'gatsby-plugin-locale'

export const LinkWrapper = styled('div')({})

export const ALink = styled(Link)({
  textDecoration: `none`,
  position: 'relative',
  '&:after': {
    transition: 'bottom .2s',
    content: '""',
    position: 'absolute',
    bottom: 1,
    left: 0,
    width: `100%`,
    height: 1,
    background: theme.BRAND_COLOR
  },
  '&:hover': {
    '&:after': {
      bottom: -2
    }
  }
})
