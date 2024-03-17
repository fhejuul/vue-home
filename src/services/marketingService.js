import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://github.com/fhejuul/json-img-test/raw/main',
  withCredentials: false,
  headers: {
    Accept: 'image/*',
    'Content-Type': 'image/*',
  },
})

export default {
  getParams() {
    return apiClient.get('/marketingKoege.gif')
  },
}