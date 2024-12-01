export interface UserItem {
  username: string
  email: string
  password: string
  repassword?: string
}

export interface UserItemResponse {
  id?: number
  username: string
  email: string
	description: string,
	phone: string,
	telegram: string,
	github: string,
	password: string,
	repassword: string,
	stack: string[]
}

export interface UserLoginItem {
  email: string
  password: string
}

export interface UserApiResponse {
  data: UserItemResponse
  token: string
}
