import styled from 'styled-components'
import theme from 'assets/theme'

export const h1 = styled("h1")(({ style }) => ({
  fontSize: 20,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const h2 = styled("h2")(({ style }) => ({
  fontSize: 18,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const h3 = styled("h3")(({ style }) => ({
  fontSize: 16,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const p = styled("p")(({ style }) => ({
  fontSize: 14,
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const span = styled("span")(({ style }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.PRIMARY_COLOR,
  ...style
}))
