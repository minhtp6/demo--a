import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Home from './components/Home';
import Login from './components/Login';
import VModal from 'vue-js-modal'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VModal)
const routes = [
    {path:'/', name:'Login' ,component: Login},
    { path: '/Home',name: 'Home' , component: Home}
  ];
  const router = new VueRouter({
    mode: 'history',
    routes,
  });


new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')