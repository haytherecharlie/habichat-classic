import React from 'react'
import { useDispatch } from 'react-redux'
import AddIcon from 'react-ionicons/lib/MdAdd'
import theme from 'ui/assets/theme'
import Link from 'ui/atoms/Link'
import Responsive from 'ui/atoms/Responsive'
import Text from 'ui/atoms/Text'
import * as S from './Footer.style'

export const WebFooter = () => {
  const date = new Date()

  return (
    <S.Footer>
      <Responsive style={{ margin: `0 auto` }}>
        <Responsive style={{ justifyContent: 'flex-start', flex: 2 }}>
          <Text size="XS" text={`© ${date.getFullYear()} habichat`} unique />
        </Responsive>
        <Responsive style={{ justifyContent: 'flex-end', flex: 1, marginRight: -5 }}>
          <Link type="external" href="https://twitter.com/habichat1">
            <S.Twitter color={theme.BACKGROUND_COLOR} fontSize="10" />
          </Link>
          <Link type="external" href="https://github.com/habichat">
            <S.Github color={theme.BACKGROUND_COLOR} fontSize="10" />
          </Link>
          <Link type="external" href="https://www.linkedin.com/company/habichat">
            <S.LinkedIn color={theme.BACKGROUND_COLOR} fontSize="10" />
          </Link>
        </Responsive>
      </Responsive>
    </S.Footer>
  )
}

export const AppFooter = ({ addButton = false }) => {
  const dispatch = useDispatch()
  return (
    <S.Footer style={{ position: 'fixed', bottom: 0, left: 0 }}>
      <Responsive style={{ justifyContent: 'center', flex: 1, margin: `0 auto` }}>
        {addButton && (
          <Link type="button" onClick={() => dispatch({ type: 'MODAL', value: 'new-post' })}>
            <S.NewPostButton>
              <AddIcon color="#FFF" fontSize="20px" />
            </S.NewPostButton>
          </Link>
        )}
        <Text size="XS" text="This is where ads will go." unique />
      </Responsive>
    </S.Footer>
  )
}
