import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { db } from 'services/firebase'
import { atob, bota } from 'base-64'

const useRealtimeDb = type => {
  let listen = false
  const dispatch = useDispatch()

  const handleAddedDocument = value => dispatch({ type: `ADD_${type.toUpperCase()}`, value })
  const handleModifiedDocument = value => dispatch({ type: `UPDATE_${type.toUpperCase()}`, value })
  const handleRemovedDocument = value => dispatch({ type: `DELETE_${type.toUpperCase()}`, value })

  const parseSnapshot = documents => {
    if (listen === true) {
      documents.docChanges().forEach(value => {
        switch (value.type) {
          case 'added':
            return handleAddedDocument({ id: value.doc.id, ...value.doc.data() })
          case 'modified':
            return handleModifiedDocument({ id: value.doc.id, ...value.doc.data() })
          case 'removed':
            return handleRemovedDocument({ id: value.doc.id, ...value.doc.data() })
          default:
            return
        }
      })
    }
    listen = true
  }

  useEffect(() => {
    const listener = db.collection(`communities/pyNBzg3V742S5v8gWfRB/${type}`).onSnapshot(parseSnapshot)
    return () => listener()
  }, [])
}

export default useRealtimeDb
