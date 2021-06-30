import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'React',
        completed: false,
      },
      {
        title: 'Nodejs',
        completed: false,
      },
      {
        title: 'GraphQL',
        completed: false,
      },
    ]
  },
  mutations: {
    CREATE_TODO: function (state, todoItem) {
      // console.log(state)
      state.todos.push(todoItem)
    }
  },
  actions: {
    // createTodo: function (context, todoItem) {
    //   // console.log(context)
    //   context.commit('CREATE_TODO', todoItem)
    // },
    createTodo: function ({ commit }, todoItem) {
      commit('CREATE_TODO', todoItem)
    }
  },
  modules: {
  }
})
