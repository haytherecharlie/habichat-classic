import styled from 'styled-components'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { View, Text, Image } from 'react-native'

export const MessageWrapper = styled(View)({
  padding: `0px 10px 10px 10px`,
  flex: 1
})

export const WhiteBox = styled(View)({
  flex: 1,
  marginLeft: 20,
  background: `#fff`,
  borderRadius: 10,
  boxShadow: `0 1px 1px rgba(0,0,0,0.2)`,
  display: `flex`,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  border: `.5px solid rgba(0,0,0,0.01)`,
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
  padding: `10px 10px 0px 30px`
})

export const Body = styled(View)({
  width: `100%`,
  flex: 1,
  padding: `0px 20px 0px 30px`
})

export const ImageBody = styled(Image)({
  height: 250,
  width: 250,
  margin: `0 20px`
})

export const Time = styled(Text)({
  width: `100%`,
  color: `#ccc`,
  fontSize: 10,
  padding: `5px 10px 10px 0px`,
  textAlign: 'right'
})

export const Icon = styled(Ionicon)({})
