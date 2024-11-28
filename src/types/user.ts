export interface UserItem {
  username: string
  email: string
  password: string
  repassword?: string
}

export interface UserItemResponse {
  id: number
  username: string
  email: string
  password: string
}

export interface UserLoginItem {
  email: string
  password: string
}

export interface UserApiResponse {
  data: UserItemResponse
  token: string
}
