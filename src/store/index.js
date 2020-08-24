import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookshelf: [],
  },
  mutations: {
      ADD_NEW_BOOK(state,payload){
          state.bookshelf.push(payload);
      },
      SET_NEW_USER(state,payload){
        const index = state.bookshelf.findIndex( obj => obj.id === payload.selectedBook.id);
        state.bookshelf[index].user = payload;
      },
      REMOVE_BOOK(state,payload){
        const index = state.bookshelf.findIndex( obj => obj.id === payload.id);
        state.bookshelf.splice(index,1);
      }
  },
  actions: {
      ADD_NEW_BOOK({commit},payload){
          const book = {...payload, user: null}
          commit('ADD_NEW_BOOK', book)
      },
      SET_NEW_USER({commit},payload){
        commit('SET_NEW_USER', payload)
      },
      REMOVE_BOOK({commit},payload){
        commit('REMOVE_BOOK',payload)
      }
  },
  getters: {
      bookshelf: state => state.bookshelf,
      bookshelfForUser: state => state.bookshelf.filter(obj => obj.user === null),
  },
  plugins: [vuexLocal.plugin],
});
