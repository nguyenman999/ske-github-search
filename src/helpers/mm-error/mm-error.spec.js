import MMError from './mm-error'

describe('MMError', () => {
  it('throws an MMError object', () => {
    try {
      throw new MMError({
        message: 'test',
      })
    } catch (error) {
      expect(error.message).toBe('test')
      expect(error.code).toBe(false)
    }
  })
  it('even throws an MMError object without captureStackTrace', () => {
    Error.captureStackTrace = false
    try {
      throw new MMError({
        message: 'test',
      })
    } catch (error) {
      expect(error.message).toBe('test')
      expect(error.code).toBe(false)
    }
  })
})
