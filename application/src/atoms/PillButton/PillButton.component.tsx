import React from 'react'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './PillButton.style'

const PillButton = ({ onPress, children }) => {
  return (
    <S.PillButton onPress={onPress}>
      <Text size="h3" style={{ color: theme.WHITE }}>
        {children}
      </Text>
    </S.PillButton>
  )
}

export default PillButton
