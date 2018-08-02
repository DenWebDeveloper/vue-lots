import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Section from './components/Section'
import Lot from './components/Lot'

Vue.use(VueRouter);

const routes = [
    { path: '/', name:'Home', component: Section},
    { path: '/lot/:id', component: Lot }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
  el: '#app',
  render: h => h(App)
});
