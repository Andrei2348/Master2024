import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'

const dataStore = useDataStore()
const uxuiStore = useUxuiStore()

export const useModalClose = (): void => {
  uxuiStore.setModalName('')
  dataStore.setProjectForEdit(null)
  dataStore.setTaskForEdit(null)
}
