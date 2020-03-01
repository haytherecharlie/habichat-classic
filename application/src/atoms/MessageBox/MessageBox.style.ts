import styled from 'styled-components'
import { View, Text, Image } from 'react-native'

export const MessageWrapper = styled(View)({
  padding: `10px 10px`,
  minHeight: 100
})

export const WhiteBox = styled(View)({
  flex: 1,
  marginLeft: 20,
  background: `#fff`,
  borderRadius: 10,
  boxShadow: `2px 2px 2px rgba(0,0,0,0.2)`,
  display: `flex`,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative'
})

export const AuthorCircle = styled(Image)({
  height: 40,
  width: 40,
  borderRadius: 20,
  position: 'absolute',
  left: -20,
  top: 15,
  background: '#000'
})

export const Header = styled(View)({
  width: `100%`,
  display: `flex`,
  flexDirection: `row`,
  alignItems: 'center',
  justifyContent: `space-between`,
  padding: `10px 10px 0px 20px`
})

export const Body = styled(View)({
  width: `100%`,
  flex: 1,
  paddingBottom: 20,
  display: `flex`,
  alignItems: 'center'
})

export const ImageBody = styled(Image)({
  height: 250,
  width: 250,
  margin: `0 20px`
})

export const Name = styled(Text)({
  // fontFamily: 'habichat',
  paddingLeft: 10,
  fontSize: 16
})

export const Time = styled(Text)({
  color: `#ccc`,
  fontSize: 10
})

export const MessageText = styled(Text)({
  width: `100%`,
  fontSize: 20,
  padding: `0 30px`
})
