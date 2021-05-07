import { createStore } from 'vuex'

export default createStore({
  state: {
    profiles: [{name: "adam"}]
  },
  mutations: {
    addProfile(state, data){
      state.profiles = [...state.profiles, ...data] //1
      // state.profiles.push(data) //2
    }
  },
  actions: {
  },
  modules: {
  }
})
