import React from 'react'
import Text from 'atoms/Text'
import * as S from './PostalCodeInput.style'

const PostalCodeInput = () => {
  return (
    <S.PostalCodeInput>
      <Text type="h3" text="street-address" style={{ marginLeft: 15, marginBottom: 5 }} />
      <S.InputBorder valid="pending">
        <S.Input />
      </S.InputBorder>
    </S.PostalCodeInput>
  )
}

export default PostalCodeInput
