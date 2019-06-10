class MMError extends Error {
  constructor({
    message,
    key = false,
    code = false,
  }, ...params) {
    super(...params)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MMError)
    }
    this.message = message
    this.key = key
    this.code = code
  }
}

export default MMError
