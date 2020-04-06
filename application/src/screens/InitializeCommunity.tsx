import React from 'react'
import CenterLayout from 'layouts/CenterLayout'
import Spinner from 'atoms/Spinner'
import useCommunityInitialization from 'utils/hooks/useCommunityInitialization'

const InitializeCommunity = () => {
  useCommunityInitialization()

  return (
    <CenterLayout>
      <Spinner />
    </CenterLayout>
  )
}

export default InitializeCommunity
