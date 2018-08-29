import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Map from '@/components/Map'
import Photo from '@/components/Photo'
import TrafficLights from '@/components/TrafficLights'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'photo',
        component: Photo
      },
      {
        path: '/map',
        name: 'map',
        component: Map
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/traffic-lights',
        name: 'trafficLights',
        component: TrafficLights
      }
  ],
  mode: 'history'
})