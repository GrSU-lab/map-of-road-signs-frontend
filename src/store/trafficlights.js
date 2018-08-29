import axios from 'axios'

export default {
    state: {
        trafficlights: []
    },
    mutations: {
        setTrafiicLights (state, payload) {
            state.trafficlights = payload
        }
    },
    actions: {
        async getTrafficLights({commit}) {
            commit('clearError')
            commit('setLoading', true)
            
            try {
                await axios.get('http://lartest.ru:8081/public/lights/all')
                .then(r => r.data)
                .then(value => {
                    commit('setTrafiicLights', value)
                })
              commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        trafficlights (state) {
            return state.trafficlights
        }
    }
}