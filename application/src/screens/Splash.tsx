import React from 'react'
import CenterLayout from 'layouts/CenterLayout'
import Spinner from 'atoms/Spinner'

const Loading = () => {
  return (
    <CenterLayout>
      <Spinner />
    </CenterLayout>
  )
}

export default Loading
