import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import theme from 'assets/styles'

export const PlacesAutoComplete = styled(View)({
  zIndex: 5000,
  border: `1px solid red`
})

export const container = {
  zIndex: 5000,
  flex: 0,
  width: `100%`
}

export const textInputContainer = {
  zIndex: 5000,
  backgroundColor: 'transparent',
  height: 40,
  width: `100%`,
  marginTop: 5,
  borderTopWidth: 0,
  borderBottomWidth: 0
}

export const textInput = {
  zIndex: 5000,
  backgroundColor: theme.FOREGROUND_COLOR,
  color: '#5d5d5d',
  height: 40,
  borderRadius: 25,
  marginTop: 0,
  marginRight: 0,
  marginLeft: 0,
  marginBottom: 0,
  paddingLeft: 25,
  paddingRight: 25,
  fontSize: theme.FONT_MEDIUM,
  borderWidth: 1
}

export const ListView = {
  zIndex: 5000,
  backgroundColor: theme.FOREGROUND_COLOR,
  borderRadius: 10
}

export const PoweredContainer = { borderRadius: 10 }

export const DummyContainer = styled(TouchableOpacity)({
  height: 40,
  width: `100%`,
  marginTop: 5,
  borderWidth: 1,
  borderRadius: 20,
  borderColor: p => p.borderColor,
  backgroundColor: theme.FOREGROUND_COLOR
})

export const DummyInput = styled(Text)({
  color: theme.PRIMARY_COLOR,
  height: 40,
  padding: `10px 25px 10px 25px`,
  fontSize: theme.FONT_MEDIUM,
  marginTop: -1
})
