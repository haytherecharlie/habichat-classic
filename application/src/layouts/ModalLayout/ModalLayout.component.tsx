import React from 'react'
import * as S from './ModalLayout.style'

const ModalLayout = ({ children = null, visible = false }) => {
  return (
    <S.ModalLayout
      transparent={true}
      visible={visible}
      animationType="fade"
      presentationStyle="overFullScreen"
      hardwareAccelerated={true}>
      <S.ModalOverlay>
        <S.ModalPane>{children}</S.ModalPane>
      </S.ModalOverlay>
    </S.ModalLayout>
  )
}

export default ModalLayout
