import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Make from '@/pages/Make';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/make',
      name: 'Make',
      component: Make,
    },
  ],
});
