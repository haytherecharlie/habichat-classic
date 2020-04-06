import React from 'react'
import CenterLayout from 'layouts/CenterLayout'
import Spinner from 'atoms/Spinner'
import useInitialization from 'utils/hooks/useInitialization'

const Initialization = () => {
  useInitialization()

  return (
    <CenterLayout>
      <Spinner />
    </CenterLayout>
  )
}

export default Initialization
