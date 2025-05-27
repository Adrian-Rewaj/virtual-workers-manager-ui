import axios from 'axios'
import { applyAuthTokenInterceptor, getBrowserLocalStorage } from 'axios-jwt'
import { makeRequest } from './index'

const API_URL = process.env.API_URL

if (!API_URL) {
  throw new Error('API_URL is not defined')
}

const axiosConfig = {
  baseURL: API_URL,
}

const axiosInstance = axios.create(axiosConfig)

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) {
      // return success
      if (response.status === 200 || response.status === 201) {
        return response
      }
      // reject errors & warnings
      return Promise.reject(response)
    }

    // default fallback
    return Promise.reject(response)
  },
  (error) => {
    // if the server throws an error (404, 500 etc.)
    return Promise.reject(error)
  },
)

export const initAxiosInstance = () => {
  const getStorage = getBrowserLocalStorage
  const requestRefresh = async (refreshToken) => {
    // Important! Do NOT use the axios instance that you supplied to applyAuthTokenInterceptor (in our case 'axiosInstance')
    // because this will result in an infinite loop when trying to refresh the token.
    // Use the global axios client or a different instance
    const authUserToken = await makeRequest({
      axiosRequest: () =>
        axios.create(axiosConfig).post(
          '/auth/refresh-token',
          {
            refreshToken
          },
        ),
      successText: '',
      skipEnqueueSnackbar: true
    })

    return authUserToken.data;
  }
  applyAuthTokenInterceptor(axiosInstance, {
    getStorage,
    requestRefresh,
  })
}

export default axiosInstance
