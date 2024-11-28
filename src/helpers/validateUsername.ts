export const validateUsername = (username: string) => {
  const errors: string[] = []
  const usernameRegex = /^[a-zA-Zа-яА-Я0-9_-]{2,15}$/

  if (username.length === 0) {
    errors.push('Это поле не может быть пустым')
    return errors.length > 0 ? errors.join(' ') : ''
  }

  if (!usernameRegex.test(username)){
    errors.push('Имя должно быть от 2 до 15 символов и содержать только буквы, цифры, _ или -')
  }
  return errors.length > 0 ? errors.join(' ') : ''
}
