import React from 'react'
import PinCode from 'react-native-smooth-pincode-input'
import { View } from 'react-native'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './CodeInput.style'

const CodeInput = ({ value, onTextChange }) => {
  return (
    <S.CodeInput>
      <Text {...S.Label}>Enter Verification Code</Text>
      <PinCode
        autoFocus
        cellSize={36}
        codeLength={6}
        restrictToNumbers
        cellStyle={{
          borderBottomWidth: 1,
          borderColor: theme.INPUT_PLACEHOLDER
        }}
        cellStyleFocused={{
          borderColor: theme.BRAND_COLOR
        }}
        textStyle={{
          fontSize: 24,
          color: theme.INPUT_PLACEHOLDER
        }}
        textStyleFocused={{
          color: theme.INPUT_PLACEHOLDER
        }}
        value={value}
        onTextChange={c => onTextChange(c)}
        placeholder={
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 25,
              opacity: 0.3,
              backgroundColor: theme.BRAND_COLOR
            }}></View>
        }
      />
    </S.CodeInput>
  )
}

export default CodeInput
