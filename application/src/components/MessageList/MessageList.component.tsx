import React, { useEffect, useRef } from 'react'
import useRealtimeDb from 'utils/hooks/useRealtimeDb'
import MessageBox from 'atoms/MessageBox'
import { useSelector } from 'react-redux'
import * as S from './MessageList.style'

const MessagesList = () => {
  useRealtimeDb('messages')
  const listRef = useRef(null)
  const { keyboardUp } = useSelector(s => s.application)
  const messages = useSelector(s => s.messages)
  const members = useSelector(s => s.members)

  const scrollToEnd = () => listRef.current.scrollToEnd({ animated: true })

  useEffect(() => {
    scrollToEnd()
  }, [keyboardUp, messages])

  return (
    <S.MessageList>
      <S.ScrollList onContentSizeChange={scrollToEnd} ref={listRef} bounces={true} snapToEnd={true} showsVerticalScrollIndicator={false}>
        <S.Padding />
        {messages.map(m => (
          <MessageBox key={m.id} message={m} member={members.find(x => x.id === m.author)} />
        ))}
      </S.ScrollList>
    </S.MessageList>
  )
}

export default MessagesList
