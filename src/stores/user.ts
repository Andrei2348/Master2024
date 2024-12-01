import { defineStore } from 'pinia'
import { ref } from 'vue'
import useApiCall from '@/composables/useApiCall'
import type { UserLoginItem, UserItem, UserApiResponse, UserItemResponse } from '@/types/user'
import { useRouter } from 'vue-router'
import { setStorageItemWithExpiry } from '@/helpers/localStorageHelpers'

export const useUserStore = defineStore('user', () => {
  const isLoginStatus = ref(false)
  const userInfo = ref<UserItemResponse | null>(null)
  const router = useRouter()

  const setUserInfo = (payload: UserItemResponse | null) => {
    userInfo.value = payload
  }

  const setIsLoginStatus = (payload: boolean) => {
    isLoginStatus.value = payload
  }

  const handleResponse = (status: number, response: UserApiResponse) => {
    if (status === 200 || status === 201) {
      setUserInfo(response.data)
      setIsLoginStatus(true)
      setStorageItemWithExpiry(response.token)
      router.push('/')
    } else {
      setUserInfo(null)
      setIsLoginStatus(false)
    }
  }

  const preLoginUserStatus = async (): Promise<void> => {
    try {
      const { status, data } = await useApiCall.get('/auth_me')
      if (status === 200 || status === 201) {
        setIsLoginStatus(true)
        setUserInfo(data)
      } else {
        setUserInfo(null)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const userLoginRequest = async (url: string, user: UserLoginItem): Promise<void> => {
    try {
      const { status, data } = await useApiCall.post(url, user)
      handleResponse(status, data)
    } catch (error) {
      console.log(error)
    }
  }

  const userRegisterRequest = async (url: string, user: UserItem): Promise<void> => {
    try {
      const { status, data } = await useApiCall.post(url, user)
      handleResponse(status, data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    isLoginStatus,
    userLoginRequest,
    setIsLoginStatus,
    userRegisterRequest,
    preLoginUserStatus,
    setUserInfo
  }
})
