import styled from 'styled-components'
import { Link } from 'gatsby-plugin-locale'

export const InternalLink = styled(Link)({
  textDecoration: 'none',
  cursor: 'pointer'
})

export const ExternalLink = styled('a')({
  textDecoration: 'none',
  cursor: 'pointer'
})

export const ButtonLink = styled('button')({
  border: 'none',
  background: 'transparent',
  cursor: 'pointer'
})
