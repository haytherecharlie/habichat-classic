import { pathOr } from 'ramda'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useNeighbours = cid => {
  const [neighbours, setNeighbours] = useState({})
  const posts = useSelector(s => pathOr({}, ['posts', cid], s))

  useEffect(() => {
    const postObj = Object.entries(posts)
    if (postObj.length)
      return setNeighbours(postObj.reduce((acc, [key, post]) => ({ ...acc, [key]: { ...post.author, key } }), {}))
  }, [posts])

  return Object.values(neighbours)
}

export default useNeighbours
