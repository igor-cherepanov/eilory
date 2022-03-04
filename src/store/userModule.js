import axios from "axios";
import router from "@/router/router";

const API_URL = process.env.VUE_APP_API_URL;

export const userModule = {
    namespaced: true,
    state: () => ({
        id: {
            type: Number,
            default: null,
        },
        name: {
            type: String,
            default: '',
        },
    }),
    getters: {},
    mutations: {
        setId(state, id) {
            state.id = id
        },
        setName(state, name) {
            state.name = name
        },
    },
    actions: {
        async userInfo({commit}) {
            const userInfoUrl = API_URL + '/api/user-info';

            axios.get(userInfoUrl).then(userInfoResponse => {
                commit('setId', userInfoResponse.data.id)
                commit('setName', userInfoResponse.data.name)
            })
        },

        // eslint-disable-next-line no-empty-pattern
        async login({}, {login, password}) {
            const csrfUrl = API_URL + '/sanctum/csrf-cookie';
            const loginUrl = API_URL + '/login';

            axios.get(csrfUrl).then(() => {
                axios.post(loginUrl, {
                    email: login,
                    password: password,
                }).then(() => {
                    this.userInfo
                    router.push('/home')
                })
            })
        },

        // eslint-disable-next-line no-empty-pattern
        async register({}, {name, login, password, confirmPassword}) {
            const csrfUrl = API_URL + '/sanctum/csrf-cookie';
            const registerUrl = API_URL + '/register';

            axios.get(csrfUrl).then(() => {
                axios.post(registerUrl, {
                    email: login,
                    name: name,
                    password: password,
                    password_confirmation: confirmPassword
                }).then(() => {
                    this.userInfo
                    router.push('/home')
                })
            })
        },

        logout({commit}) {
            commit('setId', null)
            commit('setName', "")
            const domain = process.env.VUE_APP_API_URL;
            const logoutUrl = domain + '/logout';

            axios.post(logoutUrl)
        }
    },
    modules: {}
}
