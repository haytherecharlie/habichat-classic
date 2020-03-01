const initialize = () =>
  new Promise((resolve, reject) => {
    fetch(`https://us-central1-habichat-86de6.cloudfunctions.net/initialize?c=pyNBzg3V742S5v8gWfRB`)
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })

export default initialize
