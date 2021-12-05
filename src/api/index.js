import axios from 'axios'

const client = axios.create({
  baseURL: 'https://61a0fad86c3b400017e69b41.mockapi.io/'
})

client.interceptors.request.use(req => {
  return req
})

client.interceptors.response.use(res => {
  return res.data
})

export default client

export const loadAssets = async function () {
  return client.get('/currencies')
}

export const doExchange = async function ({ from, to, amount }) {
  return client.post('/exchange', { from, to, amount })
}