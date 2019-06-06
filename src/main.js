import Vue from 'vue';
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from '@/stores/store';
import Vuetify from 'vuetify';
import { mainTheme } from '@/styles/mainTheme.js'

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: mainTheme
})

let VueApp = Vue;

let Bploc = new VueApp({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
