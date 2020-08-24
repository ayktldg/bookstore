import Vue from "vue";
import Vuex from "vuex";
import bookshelf from './bookshelf/bookshelf'
import users from './users/users'
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    bookshelf,
    users
  },
  plugins: [vuexLocal.plugin]
});
