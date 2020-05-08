import styled from 'styled-components'
import { Link } from 'gatsby-plugin-locale'

export const InternalLink = styled(Link)({
  textDecoration: 'none'
})

export const ExternalLink = styled('a')({
  textDecoration: 'none'
})

export const ButtonLink = styled('button')({
  border: 'none',
  background: 'transparent'
})
