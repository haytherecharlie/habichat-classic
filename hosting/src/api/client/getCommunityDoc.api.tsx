import React, { useEffect, useState } from 'react'
import { fetchCommunity } from 'api/routes'

const getCommunityDocUI = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    fetchCommunity('H4E')
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default getCommunityDocUI
