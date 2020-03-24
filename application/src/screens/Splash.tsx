import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import CenterLayout from 'layouts/CenterLayout'
import Spinner from 'atoms/Spinner'

const Loading = () => {
  const { message } = useSelector(s => s.app.initialization)
  return (
    <CenterLayout>
      <Spinner />
      <Text>{message}</Text>
    </CenterLayout>
  )
}

export default Loading
