import styled from 'styled-components'
import theme from 'assets/theme'

export const ChangeLocale = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
})

export const Divider = styled('div')({
  width: 1,
  height: `15px`,
  background: theme.BRAND_COLOR,
  margin: `0 3px`
})

export const FlagLink = styled('button')({
  border: 0,
  background: 'transparent',
  cursor: 'pointer',
  position: 'relative',
  padding: 0,
  margin: `0 5px`,
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
