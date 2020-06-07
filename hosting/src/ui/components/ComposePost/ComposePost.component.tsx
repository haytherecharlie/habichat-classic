import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Modal from 'ui/atoms/Modal'
import Responsive from 'ui/atoms/Responsive'
import Text from 'ui/atoms/Text'
import TextInput from 'ui/atoms/TextInput'
import * as S from './ComposePost.style'

const ComposePost = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const cancelPost = () => {
    dispatch({ type: 'MODAL', value: null })
    return setText('')
  }

  return (
    <Modal name="new-post">
      <Responsive style={{ flex: 0, flexDirection: 'column', justifyContent: 'stretch', margin: `10px auto` }}>
        <TextInput text={text} setText={setText} placeholder="Write a new post..." />
        <Responsive style={{ flex: `0`, justifyContent: 'flex-end', padding: `10px 0` }}>
          <Link type="button" onClick={cancelPost} style={{ marginRight: 10 }}>
            <ButtonPill invert style={{ padding: 8, width: 80 }}>
              <Text size="XS" text="CANCEL" bold unique />
            </ButtonPill>
          </Link>
          <Link type="button" onClick={() => console.log('Post')}>
            <ButtonPill style={{ padding: 8, width: 80 }}>
              <Text size="XS" text="POST" style={{ color: '#FFF' }} bold unique />
            </ButtonPill>
          </Link>
        </Responsive>
      </Responsive>
    </Modal>
  )
}

export default ComposePost
