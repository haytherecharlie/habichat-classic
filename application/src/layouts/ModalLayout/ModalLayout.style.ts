import styled from 'styled-components'
import { Modal, View } from 'react-native'
import theme from 'assets/theme'

export const ModalLayout = styled(Modal)({})

export const ModalOverlay = styled(View)({
  height: `100%`,
  width: `100%`,
  background: 'rgba(0,0,0,0.5)'
})

export const ModalPane = styled(View)({
  height: `90%`,
  width: `93%`,
  borderRadius: theme.MODAL_RADIUS,
  margin: 'auto',
  background: theme.BACKGROUND_COLOR,
  border: `1px solid ${theme.BRAND_COLOR}`
})
