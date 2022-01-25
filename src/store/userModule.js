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
        login: {
            type: String,
            default: '',
        },
        password: {
            type: String,
            default: '',
        }
    }),
    getters: {},
    mutations: {
        setId(state, id) {
            state.id = id
        },
        setName(state, name) {
            state.name = name
        },
        setLogin(state, login) {
            state.login = login
        },
        setPassword(state, password) {
            state.password = password
        },
    },
    actions: {
        async login({state, commit}, login, password) {
            try {
                const loginUrl = '';
                const response = await axios.get(loginUrl, {
                    params: {
                        login: login,
                        password: password,
                    }
                })
                commit("setId", response.data.id)
                commit("setName", response.data.name)
                this.$cookies.set("token", response.data.token, 60 * 60 * 24 * 30) // 1 month after, expire

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
