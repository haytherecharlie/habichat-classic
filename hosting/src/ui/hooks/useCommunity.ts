import pathOr from 'ramda.pathor'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { streamCommunity } from 'api/routes'

const useCommunity = cid => {
  const reduxCommunity = useSelector(s => pathOr(undefined, ['communities', cid], s))

  useEffect(() => {
    const listener = streamCommunity(cid)
    return () => listener()
  }, [])

  return reduxCommunity
}

export default useCommunity
