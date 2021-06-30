import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    CREATE_TODO: function (state, todoItem) {
      // console.log(state)
      state.todos.push(todoItem)
    },
    DELETE_TODO: function (state, todoItem) {
      // console.log(state)
      // 1. todoItem이 첫번 째로 만나는 요소의 index를가져옴
      const index = state.todos.indexOf(todoItem)
      // 2. 해당 index 1개만 삭제하고 나머지 요소를 토대로 새로운 배열 생성
      state.todos.splice(index, 1)
    },
    UPDATE_TODO: function (state, todoItem) {
      // console.log(state)
      // console.log(todoItem)
      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    },
  },
  actions: {
    // createTodo: function (context, todoItem) {
    //   // console.log(context)
    //   context.commit('CREATE_TODO', todoItem)
    // },
    createTodo: function ({ commit }, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function ({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodo: function ({ commit }, todoItem) {
      commit('UPDATE_TODO', todoItem)
    },
  },
  modules: {
  }
})
