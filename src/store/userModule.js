import {createStore} from 'vuex'

export default createStore({
    state: () => ({
        id: {
            type: String,
            default: null,
        },
        token: {
            type: String,
            default: null,
        },
        isAuth: {
            default: false,
            type: Boolean
        }
    }),
    getters: {},
    mutations: {

    },
    actions: {},
    modules: {}
})
