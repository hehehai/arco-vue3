import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { UserModule } from '~/types'

const routes = setupLayouts(generatedRoutes)

export const install: UserModule = ({ app }) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

  router.beforeEach((to, from) => {
    if (to.path !== from.path)
      NProgress.start()
  })
  router.afterEach(() => { NProgress.done() })

  app.use(router)
}
