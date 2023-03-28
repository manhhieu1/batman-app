import { ErrorResponse } from '@services/models'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { BASE_URL } from 'shared/constants/env'
import { getJwtToken } from 'utils/local-storage'


axios.defaults.baseURL = BASE_URL ? BASE_URL : ''

axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    const token = await getJwtToken()
    if (token) {
      config.headers = { Authorization: `${token.replaceAll('"', '')}` }
    }
    return config
  },
  function (error: AxiosError) {
    console.error(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response
  },
  function (error: AxiosError<ErrorResponse>) {
    console.error(error)
    error.message = error.message || 'Lỗi không xác định'
    return Promise.reject(error)
  }
)
