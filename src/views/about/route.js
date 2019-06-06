import * as router from '@/router'

const routes = [{
  path: '/about',
  name: 'About',
  component: () => import('./About.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)