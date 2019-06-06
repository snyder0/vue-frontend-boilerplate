import * as router from '@/router'

const routes = [{
  path: '/organizations',
  name: 'Organizations',
  component: () => import('./Organizations.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)