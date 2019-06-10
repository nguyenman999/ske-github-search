const convertParams = (params) => {
  const result = []
  const keys = Object.keys(params)
  keys.forEach((key) => {
    if (params[key]) {
      result.push(`${key}=${encodeURIComponent(params[key])}`)
    }
  })
  return result.join('&')
}

export default convertParams
