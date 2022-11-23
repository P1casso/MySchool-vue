import {createStore} from 'vuex'

export default createStore({
    state: {
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        UserId:localStorage.getItem('UserId') ? localStorage.getItem('UserId') : '',
    },
    getters: {},
    mutations: {
        login(state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem("Authorization", user.Authorization)
            localStorage.setItem("userId",user.UserId)
        }
    },
    actions: {},
    modules: {}
})
