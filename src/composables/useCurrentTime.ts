import { ref, computed, onMounted } from 'vue'

export function useCurrentTime() {
  const currentTime = ref<Date>(new Date())

  const day = computed<number>(() => currentTime.value.getDate())
  const monthName = computed<string>(() => {
    return currentTime.value.toLocaleString('ru-RU', { month: 'long' })
  })
  const year = computed<number>(() => currentTime.value.getFullYear())
  const weekDay = computed<string>(() => {
    return currentTime.value.toLocaleString('ru-RU', { weekday: 'long' })
  })
  const formattedTime = computed<string>(() => {
    return currentTime.value.toLocaleString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  })

  onMounted(() => {
    setInterval(() => {
      currentTime.value = new Date()
    }, 1000)
  })

  return {
    currentTime,
    weekDay,
    day,
    monthName,
    year,
    formattedTime
  }
}
