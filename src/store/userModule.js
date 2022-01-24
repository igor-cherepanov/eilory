import {createStore} from 'vuex'

export default createStore({
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
        async login({state, commit}) {
            try {
                const loginUrl = '';
                const response = await axios.get(loginUrl, {
                    params: {
                        login: state.login,
                        password: state.password,
                    }
                })
                if (response){
                    this.$cookies.set("token", response.data.token, 60 * 60 * 24 * 30); // 1 month after, expire
                }
            } catch (e) {
                alert('Ошибка')
                console.log(e)
            }
        },
        async register() {

        }
    },
    modules: {}
})
