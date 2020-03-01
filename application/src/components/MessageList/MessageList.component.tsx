import React, { useEffect, useRef } from 'react'
import useRealtimeDb from 'utils/hooks/useRealtimeDb'
import Text from 'atoms/Text'
import MessageBox from 'atoms/MessageBox'
import { useSelector } from 'react-redux'
import * as S from './MessageList.style'

const MessagesList = () => {
  useRealtimeDb('messages')
  const listRef = useRef(null)
  const { keyboardUp } = useSelector(s => s.application)
  const messages = useSelector(s => s.messages)
  const members = useSelector(s => s.members)

  useEffect(() => {
    listRef.current.scrollToEnd({ animated: true })
  }, [keyboardUp, messages])

  return (
    <S.MessageList>
      {/* <S.TitleWrapper>{!keyboardUp && <Text size="h2">Community Posts</Text>}</S.TitleWrapper> */}
      <S.ScrollList ref={listRef} bounces={true} snapToEnd={true} showsVerticalScrollIndicator={false}>
        {messages.map(m => (
          <MessageBox key={m.id} message={m} member={members.find(x => x.id === m.author)} listRef={listRef} />
        ))}
      </S.ScrollList>
    </S.MessageList>
  )
}

export default MessagesList
