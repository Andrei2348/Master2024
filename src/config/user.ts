import { UserItemResponse } from '@/types/user'
import { UserLoginItem } from '@/types/user'

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

export const BACKGROUNDS: string[] = [  
	new URL('@/assets/images/loginBG0.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG1.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG2.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG3.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG4.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG5.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG6.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG7.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG8.jpg', import.meta.url).href,  
	new URL('@/assets/images/loginBG9.jpg', import.meta.url).href,  
];  

export const TOKEN_KEY: string = 'crmToken'