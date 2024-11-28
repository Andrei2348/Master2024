export const validateEmail = (email: string) => {
  const errors: string[] = []

  if (email.length === 0) {
    errors.push('Это поле не может быть пустым')
    return errors.length > 0 ? errors.join(' ') : ''
  }

  if (!email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )){
    errors.push('Некорректный email')
  }
  return errors.length > 0 ? errors.join(' ') : ''
}
