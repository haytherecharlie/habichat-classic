export const asyncCollectionToDocs = async (refCollection, refType) => {
  try {
    const refs = await Promise.all(refCollection.docs.map(refItem => refItem.data()[refType].get()))
    return refs.reduce((acc, doc) => {
      acc[doc.id] = doc.data()
      return acc
    }, {})
  } catch (err) {
    console.error('error fetching docs from collection')
  }
}
