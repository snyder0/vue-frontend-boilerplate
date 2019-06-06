import * as router from '@/router'

const routes = [{
  path: '/',
  name: 'Login',
  component: () => import('./Login.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)