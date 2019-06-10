import request from './request'

export const makeRequestUrl = url => `${process.env.REACT_APP_API_URL}${url}`

export const makeDefaultHeader = () => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json; charset=UTF-8')
  return headers
}

export const makeRequestParams = (method, body, headers) => {
  const requestHeaders = headers || makeDefaultHeader()
  const params = {
    headers: requestHeaders,
    method: method || 'GET',
    body: requestHeaders.get('Content-Type') === 'application/json; charset=UTF-8' ? JSON.stringify(body) : body,
  }
  return params
}

export const makeRequest = async ({
  method, url, headers, body,
}) => {
  const requestParams = makeRequestParams(method, body, headers)
  const requestUrl = makeRequestUrl(url)
  const response = await request(requestUrl, requestParams)
  return response
}
