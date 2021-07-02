import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myMovies: [],
  },
  mutations: {
    CREATE_MOVIELIST: function (state, movieItem) {
      state.myMovies.push(movieItem)
    },
    DELETE_MOVIELIST: function (state, movieItem) {
      const idx = state.myMovies.indexOf(movieItem)
      state.myMovies.splice(idx, 1)
    },
    UPDATE_MOVIELIST: function (state, movieItem) {
      const idx = state.myMovies.indexOf(movieItem)
      state.myMovies[idx].watched = !(state.myMovies[idx].watched)
    },
  },
  actions: {
    createMovieList: function ({ commit }, movieItem) {
      commit('CREATE_MOVIELIST', movieItem)
    },
    deleteMovieList: function ({ commit }, movieItem) {
      commit('DELETE_MOVIELIST', movieItem)
    },
    updateMovieList: function ({ commit }, movieItem) {
      commit('UPDATE_MOVIELIST', movieItem)
    },
  },
  modules: {
  }
})
