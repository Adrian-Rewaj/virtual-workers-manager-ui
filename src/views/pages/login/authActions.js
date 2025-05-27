import { clearAuthTokens, setAuthTokens } from 'axios-jwt'
import axios from '../../../utils/axios/axiosInstance'
import { makeRequest } from '../../../utils/axios'

export const login = async (username, password) => {
  try {
    const loginResponse = await makeRequest({
      axiosRequest: () =>
        axios.post(
          '/auth/login',
          {
            username,
            password,
          },
        ),
      successText: 'You have been logged in',
    })

    if (loginResponse && loginResponse.data) {
      const { accessToken, refreshToken } = loginResponse.data;
      await setAuthTokens({
        accessToken,
        refreshToken,
      })
    }

    return loginResponse
  } catch (error) {
    return false
  }
}

export const getUsers = async () => {
  try {
    const usersResponse = await makeRequest({
      axiosRequest: () => axios.get('/users'),
    })
  console.log('usersResponse', usersResponse);
    return usersResponse
  } catch (error) {
    return false
  }
}

export const logout = async () => {
  await clearAuthTokens()
}
