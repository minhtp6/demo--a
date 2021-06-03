import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home_Screen.vue';
import Login from '../components/Login.vue';
const routes = [
    {path:'/' ,component: Login},
    { path: '/Home',name: 'Home' , component: Home}
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;