import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
      path: '/menu/widgets',
      name: 'menu-widgets',
      component: () =>
        import(/* webpackChunkName: "widgets" */ '@/views/Widgets.vue'),
    },
    {
      path: '/menu/list',
      name: 'menu-list',
      component: () =>
        import(/* webpackChunkName: "list" */ '@/views/List.vue'),
    },
    {
      path: '/menu/list-virtual',
      name: 'menu-list-virtual',
      component: () =>
        import(
          /* webpackChunkName: "list-virtual" */ '@/views/ListVirtual.vue'
        ),
    },
    {
      path: '/menu/card',
      name: 'menu-card',
      component: () =>
        import(/* webpackChunkName: "card" */ '@/views/Card.vue'),
    },
    {
      path: '/menu/grid',
      name: 'menu-grid',
      component: () =>
        import(/* webpackChunkName: "grid" */ '@/views/Grid.vue'),
    },
    {
      path: '/menu/modal',
      name: 'menu-modal',
      component: () =>
        import(/* webpackChunkName: "modal" */ '@/views/Modal.vue'),
    },
    {
      path: '/listing/:id',
      name: 'listing',
      component: () =>
        import(/* webpackChunkName: "detail" */ '@/views/DetailPage.vue'),
    },
  ],
});
