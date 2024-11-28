// import { UserPasswordApiPayload } from '@/types/user'

export const validatePassword = (password: string | null) => {
  const minLength = 8
  const errors: string[] = []

  if (password === null || password.length === 0) {
    errors.push('Пароль не должен быть пустым.')
    return errors.length > 0 ? errors.join(' ') : ''
  }

  if (
    password.length < minLength ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/\d/.test(password)
  ) {
    if (password.length < minLength) {
      errors.push('Пароль должен содержать минимум 8 символов.')
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Пароль должен содержать хотя бы одну заглавную букву.')
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Пароль должен содержать хотя бы одну строчную букву.')
    }
    if (!/\d/.test(password)) {
      errors.push('Пароль должен содержать хотя бы одну цифру.')
    }
  }
  return errors.length > 0 ? errors.join(' ') : ''
}

// export const isPasswordValid = (password: string) => {
//   return (
//     password !== null &&
//     password !== undefined &&
//     password.trim() !== '' &&
//     password.length > 1
//   )
// }

export const doPasswordsMatch = (
  newPassword: string,
  repeatPassword: string,
) => {
  const errors: string[] = []
  if (repeatPassword === null || repeatPassword.length === 0) {
    errors.push('Пароль не должен быть пустым.')
    return errors.length > 0 ? errors.join(' ') : ''
  }
  if (
    newPassword !== undefined &&
    repeatPassword !== undefined &&
    newPassword !== repeatPassword
  ){
    errors.push('Пароли не совпадают.')
  }
  return errors.length > 0 ? errors.join(' ') : ''
}

// export const canChangePassword = (
//   changePasswordData: UserPasswordApiPayload | null,
//   reErrorMessage: string,
//   errorMessage: string,
// ): boolean => {
//   if (!changePasswordData) return false
//   const {
//     password = '',
//     newPassword = '',
//     repeatPassword = '',
//   } = changePasswordData || {}
//   return (
//     isPasswordValid(password || '') &&
//     isPasswordValid(newPassword || '') &&
//     isPasswordValid(repeatPassword || '') &&
//     reErrorMessage === '' &&
//     errorMessage === ''
//   )
// }
