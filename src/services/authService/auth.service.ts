import { setJwtToken } from './../../utils/local-storage';
import axios, { AxiosResponse } from 'axios'
import { User } from '@services/models'

const AUTH_API = {
  LOGIN: '/accounts/login',
  INFO: `/account-info`,
  CHANGE_PASSWORD: '/accounts/change-password',
  GET_INFO: '/account-info'
}

interface LoginResponse {
  data: {
    token: string
    userData: User
  }
  message?: string
}

const authService = {
  login: async (data: { email: string; password: string }): Promise<any> => {
    const res: AxiosResponse<LoginResponse> = await axios.post(
      AUTH_API.LOGIN,
      data
    )
    setJwtToken(res.data.data.token)
    return res.data.data
  },
  getUserInfo: async (): Promise<User> => {
    const res: AxiosResponse<LoginResponse> = await axios.get(
      AUTH_API.INFO
    )
    return res.data.data.userData
  },
  changePassword: async (data: {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }) => {
    const resp = await axios.post(AUTH_API.CHANGE_PASSWORD, data)
    return resp
  },

}

export default authService
