const urlFinder = text => {
  const test = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,4}(\/\S*)?/.exec(text)
  return test && test[0] ? test[0] : null
}

export default urlFinder
