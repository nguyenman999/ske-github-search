import convertParams from './convert-params'

describe('convertParams', () => {
  it('Should convert the object to string of query', () => {
    const given = { q: 'test1', a: 'test2', n: undefined }
    const result = convertParams(given)
    expect(result).toEqual('q=test1&a=test2')
  })
})
