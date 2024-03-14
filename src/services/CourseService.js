import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://apps.amujuul.dk/api/infoskaerm',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getLocation(name) {
    return apiClient.get('/4')
  },
}