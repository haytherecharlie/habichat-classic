import styled from 'styled-components'
import theme from 'assets/theme'

export const Preview = styled('article')({
  border: `1px solid ${theme.BRAND_COLOR}`
})

export const Wrapper = styled('div')({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
