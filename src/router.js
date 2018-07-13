import Vue from 'vue'
import VueRouter from 'vue-router'
import MainComponent from './components/Main.vue'
import NotFoundComponent from './pages/NotFound.vue'
import HomeComponent from './pages/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MainComponent },
    { path: '/home', component: HomeComponent },
    { path: '*', component: NotFoundComponent }
  ]
})

export default router
