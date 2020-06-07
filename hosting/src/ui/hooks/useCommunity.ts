import pathOr from 'ramda.pathor'
import qs from 'query-string'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { streamCommunity } from 'api/routes'

const useCommunity = (location, navigate) => {
  const cid = pathOr('not-found', ['cid'], qs.parse(location.search))
  if (cid === 'not-found') navigate('/404/')
  const community = useSelector(s => pathOr(undefined, ['communities', cid], s))

  useEffect(() => {
    const listener = streamCommunity(cid)
    return () => listener()
  }, [])

  return { cid, community }
}

export default useCommunity
