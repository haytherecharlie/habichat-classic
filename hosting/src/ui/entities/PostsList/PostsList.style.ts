import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const PostsList = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  margin: `0 10px`,
  overflowX: 'hidden'
})

export const ScrollList = styled('div')({
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  marginTop: 10,
  paddingTop: 20,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  boxShadow: `0 -2px 5px rgba(0,0,0,0.1)`,
  '&:before': {
    content: '""',
    display: 'inline-block',
    margin: '-5px auto 0 auto',
    height: 3,
    borderRadius: 2,
    width: 30,
    background: '#DEDEDE'
  }
})
