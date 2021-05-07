import {createStore} from 'vuex'

export default createStore({
    state: {
        profiles: [
            {id: 1, name: "Adam Syarif"},
            {id: 2, name: "Roudhlotul Jannah"}
        ]
    },
    mutations: {
        addProfile(state, data) {
            state.profiles = [...state.profiles, ...data] //1
            // state.profiles.push(data) //2
        }
    },
    actions: {},
    modules: {}
})
