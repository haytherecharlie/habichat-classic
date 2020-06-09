import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pathOr } from 'ramda'
import { fetchCommunity } from 'api/routes'

const useCommunity = cid => {
  const dispatch = useDispatch()
  const community = useSelector(s => pathOr(undefined, ['communities', cid], s))

  useEffect(() => {
    fetchCommunity(cid)
    return () => dispatch({ type: 'MODAL', value: null })
  }, [])

  return community
}

export default useCommunity
