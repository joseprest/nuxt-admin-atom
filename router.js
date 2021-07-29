import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Dashboard = () => import('~/pages/dashboard/index').then(m => m.default || m)
const FileManager = () => import('~/pages/filemanager/index').then(m => m.default || m)


export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/file-manager',
        name: 'filemanager',
        component: FileManager
      }
    ]
  })
}