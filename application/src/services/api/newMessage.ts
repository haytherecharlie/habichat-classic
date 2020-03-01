import { postOptions } from 'utils/helpers/options'

const newMessage = text => {
  const time = new Date().getTime()
  const author = 'QB3zbwLUnTDdbzZWxdN4'
  const body = {
    id: `${time}${author}`,
    text,
    author,
    image: null,
    updated: time,
    created: time,
    server: false
  }
  fetch(`https://us-central1-habichat-86de6.cloudfunctions.net/newMessage?c=pyNBzg3V742S5v8gWfRB`, postOptions(JSON.stringify(body)))
  return body
}

export default newMessage
