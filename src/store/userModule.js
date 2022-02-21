import axios from "axios";

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
        auth: {
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
            try {
                const appUrl = process.env.VUE_APP_API_URL;
                const userInfoUrl = appUrl + '/api/user-info';

                axios.get(userInfoUrl).then(userInfoResponse => {
                    commit('setId', userInfoResponse.data.id)
                    commit('setName', userInfoResponse.data.name)
                })
            } catch (e) {
                console.log(e)
            }
        },
        // eslint-disable-next-line no-empty-pattern
        async login({}, {login, password}) {
            const appUrl = process.env.VUE_APP_API_URL;
            const csrfUrl = appUrl + '/sanctum/csrf-cookie';
            const loginUrl = appUrl + '/login';

            axios.get(csrfUrl).then(() => {
                axios.post(loginUrl, {
                    email: login,
                    password: password,
                }).then(() => {
                    this.userInfo
                })
            })
        },
        // eslint-disable-next-line no-empty-pattern
        async register({}, {name, login, password, confirmPassword}) {
            const domain = process.env.VUE_APP_API_URL;
            const csrfUrl = domain + '/sanctum/csrf-cookie';
            const registerUrl = domain + '/register';

            axios.get(csrfUrl).then(() => {
                axios.post(registerUrl, {
                    email: login,
                    name: name,
                    password: password,
                    password_confirmation: confirmPassword
                }).then(() => {
                    this.userInfo
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
