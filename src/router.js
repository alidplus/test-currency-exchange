import { createRouter, createWebHashHistory } from 'vue-router'
import Exchange from './components/pages/Exchange.vue'
import UIGallery from './components/pages/UIGallery.vue'

const routes = [
  { path: '/', component: Exchange },
  { path: '/ui', component: UIGallery }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router