import axios from 'axios'
import { getStorageItemWithExpiry } from '@/helpers/localStorageHelpers'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = getStorageItemWithExpiry()
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient
