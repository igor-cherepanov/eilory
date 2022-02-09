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
        async login({state, commit}, {login, password}) {
            try {
                const domain = 'http://api.eilory.test';
                const csrfUrl = domain + '/sanctum/csrf-cookie';
                const loginUrl = domain + '/login';
                const userInfoUrl = domain + '/user-info';

                console.log(login, password)
                axios.get(csrfUrl).then(csrfResponse => {
                    console.log(login, password)
                    axios.post(loginUrl, {
                        email: login,
                        password: password,
                    }).then(loginResponse => {
                        axios.get(userInfoUrl).then(userInfoResponse => {
                            commit("setId", userInfoResponse.data.id)
                            commit("setName", userInfoResponse.data.name)
                        })
                    })
                })
            } catch (e) {
                alert('Ошибка')
                console.log(e)
            }
        },
        async register({state, commit}, login, password, name) {
            try {
                const registerUrl = '';
                const response = await axios.get(registerUrl, {
                    params: {
                        login: login,
                        password: password,
                        name: name,
                    }
                })
                commit("setId", response.data.id)
                commit("setName", response.data.name)
                this.$cookies.remove("token", response.data.token) // 1 month after, expire
            } catch (e) {
                alert('Ошибка')
                console.log(e)
            }
        },
        logout({commit}) {
            commit("setId", null)
            commit("setLogin", "")
            commit("setPassword", "")
            commit("setName", "")
            this.$cookies.remove("token")
        }
    },
    modules: {}
}
