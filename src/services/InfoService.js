import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4582/api/infoskaerm',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getLocation() {
    return apiClient.get('/1')
  },
}