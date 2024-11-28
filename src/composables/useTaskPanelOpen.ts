import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { Task, Project, Link } from '@/types/projects'

const dataStore = useDataStore()
const uxuiStore = useUxuiStore()

export const useOpenCreatePanelHandler = (
  componentName: string,
  payload: Task | Project | Link | null
): void => {
  if (payload) {
    if ('task' in payload) {
      dataStore.setTaskForEdit(payload as Task)
    }
    if ('project' in payload) {
      dataStore.setProjectForEdit(payload as Project)
    }
    if ('link' in payload) {
      dataStore.setLinkForEdit(payload as Link)
    }
  }
  uxuiStore.setCreatePanelName(componentName)
}

export const useCloseCreatePanelHandler = (): void => {
  dataStore.setTaskForEdit(null)
  dataStore.setProjectForEdit(null)
  dataStore.setLinkForEdit(null)
  uxuiStore.setCreatePanelName('')
}
