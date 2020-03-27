import { postOptions } from 'utils/helpers'
import { db } from 'services/firebase'

const newMessage = text => {
  const ref = db.collection('communities/pyNBzg3V742S5v8gWfRB/messages').doc()
  const author = 'QB3zbwLUnTDdbzZWxdN4'
  const body = {
    id: ref.id,
    text,
    author,
    image: null,
    server: false
  }
  fetch(`https://us-central1-habichat-86de6.cloudfunctions.net/newMessage?c=pyNBzg3V742S5v8gWfRB`, postOptions(JSON.stringify(body)))
  return body
}

export default newMessage
