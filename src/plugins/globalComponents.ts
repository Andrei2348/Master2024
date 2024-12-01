import type { App } from 'vue'
// import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
// import InputComponent from '@/components/InputComponent/InputComponent.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue';

const globalComponents = (app: App) => {
app.component('MainLayout', MainLayout)
app.component('LoginLayout', LoginLayout)
// app.component('SvgIcon', SvgIcon)
// app.component('InputComponent', InputComponent)
}
export default globalComponents
