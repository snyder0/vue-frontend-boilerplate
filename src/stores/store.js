import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

})

export default store
function importStores(t) {
  t.keys().forEach(t)
}

importStores(require.context('@/stores/', true, /index.js$/))