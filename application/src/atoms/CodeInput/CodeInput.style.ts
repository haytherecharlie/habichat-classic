import styled from 'styled-components'
import { View, Text } from 'react-native'
import theme from 'assets/theme'

export const CodeInput = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20
})

export const Dot = styled(View)({
  width: 10,
  height: 10,
  borderRadius: 25,
  opacity: 0.3,
  backgroundColor: theme.BRAND_COLOR
})

export const PinCode = {
  cellStyle: {
    borderBottomWidth: 1,
    borderColor: theme.INPUT_PLACEHOLDER
  },
  cellStyleFocused: {
    borderColor: theme.BRAND_COLOR
  },
  textStyle: {
    fontSize: 24,
    color: theme.INPUT_PLACEHOLDER
  },
  textStyleFocused: {
    color: theme.INPUT_PLACEHOLDER
  }
}

export const Label = {
  size: 'h3',
  style: { marginTop: 20, marginBottom: 5 }
}

export const ErrorText = styled(Text)({
  color: theme.INVALID_RED,
  fontWeight: 600,
  width: `100%`,
  textAlign: 'center'
})
