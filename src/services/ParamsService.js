import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/fhejuul/json-img-test/main',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getParams() {
    return apiClient.get('/settings.json')
  },
}