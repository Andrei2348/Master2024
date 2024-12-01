import type { UserItemResponse } from '@/types/user'
import type { UserLoginItem } from '@/types/user'

export const EMPTY_USER: UserItemResponse = {
	"username": "",
	"email": "",
	"description": "",
	"phone": "",
	"telegram": "",
	"github": "",
	"password": "",
	"repassword": "",
	"stack": []
}

export const EMPTY_LOGIN_FORM: UserLoginItem = {
	"email": "",
	"password": ""
}

export const TOKEN_KEY: string = 'crmToken'