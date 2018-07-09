import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from "./routes";

import App from './App.vue';
import VuIcon from './shared/utils/VuIcon';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const mappedRoutes = routes.map(route => ({
  ...route,
  component: () => import(`./pages/${route.page}`)
}));

const router = new VueRouter({
  mode: 'history',
  routes: mappedRoutes,
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    name: 'Root',
    router,
    render: mount => mount(App)
  });

  router.onReady(() => {
    app.$mount('#app')
  })
});
