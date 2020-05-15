import { Link } from 'gatsby'
import styled from 'styled-components'

export const InternalLink = styled(Link)({
  textDecoration: 'none',
  cursor: 'pointer',
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
