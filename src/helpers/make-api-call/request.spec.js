import request, { parseResponse } from './request'
import MMError from '../mm-error/mm-error'
import * as jwtService from '../jwt-service'
import * as errors from '../error-message/message.json'

jest.mock('../jwt-service')
describe('request helper', () => {
  const sampleBody = {
    foo: 'bar',
  }
  const path = '/path'
  const requestOptions = {
    url: path,
    method: 'POST',
    body: JSON.stringify(sampleBody),
  }
  const getOptions = {
    url: path,
    method: 'GET',
  }
  const defaultError = new MMError({
    message: 'An unknown error code occured. This could be a problem with your internet connection. Please try again later',
  })

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should call POST and receive response', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        foo: 'bar',
      }),
      {
        status: 200,
      },
    )
    const response = await request(path, requestOptions)
    expect(fetch).toHaveBeenCalledWith(path, requestOptions)
    expect(response).toEqual({
      data: {
        foo: 'bar',
      },
    })
  })

  it('should call GET and receive response without token', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        foo: 'bar',
      }),
      {
        status: 200,
      },
    )
    const response = await request(path, getOptions)
    expect(fetch).toHaveBeenCalledWith(path, getOptions)
    expect(response).toEqual({
      data: {
        foo: 'bar',
      },
    })
  })

  it('should call GET and receive response', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        foo: 'bar',
      }),
      {
        status: 200,
      },
    )
    const response = await request(path, getOptions)
    expect(fetch).toHaveBeenCalledWith(path, getOptions)
    expect(response).toEqual({
      data: {
        foo: 'bar',
      },
    })
  })

  it('should call GET and receive response with emty content', async () => {
    fetch.mockResponseOnce(null, {
      status: 201,
    })
    const response = await request(path, getOptions)
    expect(fetch).toHaveBeenCalledWith(path, getOptions)
    expect(response).toEqual({
      data: null,
    })
  })

  it('should call API and receive an empty error', async () => {
    fetch.mockResponseOnce(null, {
      status: 403,
    })
    const res = await request(path, requestOptions)
    expect(res).toEqual({
      error: defaultError,
    })
  })

  it('should call API and receive an invalid error(without error code)', async () => {
    const error = {
      error: 'foo',
    }
    fetch.mockResponseOnce(error, {
      status: 403,
    })
    const res = await request(path, requestOptions)
    expect(res).toEqual({
      error: defaultError,
    })
  })

  it('should call API and receive 401 error', async () => {
    const error = {
      error: {
        code: 'bad-credential',
        key: null,
      },
    }
    fetch.mockResponseOnce(JSON.stringify(error), {
      status: 401,
    })
    const res = await request(path, requestOptions)
    expect(res).toEqual({
      error: new MMError({
        message: 'The email address and/or password are invalid. Please check your details and try again.',
      }),
    })
  })

  it('should call API and receive a bundle of invalid errors(without error code)', async () => {
    const error = {
      error: ['foo', 'bar'],
    }
    fetch.mockResponseOnce(JSON.stringify(error), {
      status: 403,
    })
    const res = await request(path, requestOptions)
    expect(res).toEqual({
      error: [],
    })
  })

  it('should call API and receive an error', async () => {
    const error = {
      error: {
        code: 'bad-credential',
        key: null,
      },
    }
    fetch.mockResponseOnce(JSON.stringify(error), {
      status: 403,
    })
    const res = await request(path, requestOptions)
    expect(res).toEqual({
      error: new MMError({
        message: 'The email address and/or password are invalid. Please check your details and try again.',
        key: null,
      }),
    })
  })

  it('should call API and receive an error with undefined code', async () => {
    const error = {
      error: {
        code: 'foo',
        key: null,
      },
    }
    fetch.mockResponseOnce(JSON.stringify(error), {
      status: 403,
    })
    const res = await request(path, requestOptions)
    expect(res).toEqual({
      error: defaultError,
    })
  })

  it('should call API and update token if needed', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        foo: 'bar',
      }),
      {
        status: 200,
        headers: {
          'refresh-token': 'test',
        },
      },
    )
    jwtService.saveToken = jest.fn()
    await request(path, requestOptions)
    expect(jwtService.saveToken).toBeCalledWith('test')
  })

  it('should call API and receive a bundle of errors', async () => {
    const error = {
      error: [
        {
          code: 'not-authenticated',
          key: null,
        },
        {
          code: 'not-authenticated',
          key: null,
        },
      ],
    }
    fetch.mockResponseOnce(JSON.stringify(error), {
      status: 403,
    })
    const res = await request(path, requestOptions)
    expect(res).toEqual({
      error: [
        new MMError({
          message: errors['not-authenticated'],
          key: null,
        }),
        new MMError({
          message: errors['not-authenticated'],
          key: null,
        }),
      ],
    })
  })
  describe('parse response', () => {
    it('should parse response when status is 204 ', async () => {
      const response = {
        status: 204,
        text: jest.fn(),
      }
      const result = await parseResponse(response)
      expect(result).toBeNull()
    })
    it('should parse response when status is 202 ', async () => {
      const response = {
        status: 202,
        text: jest.fn().mockResolvedValue('test'),
      }
      JSON.parse = jest.fn().mockReturnValue('test')
      const result = await parseResponse(response)
      expect(result).toEqual('test')
    })
    it('should parse response when status is 404', async () => {
      const response = {
        status: 202,
        text: jest.fn().mockResolvedValue('sample message'),
      }
      JSON.parse = jest.fn().mockReturnValue('sample message')
      const result = await parseResponse(response)
      expect(result).toEqual('sample message')
    })
  })
})
