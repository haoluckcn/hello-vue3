import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/detail/:id',
    component: Detail
  }]
});

// router.beforeEach

export default router