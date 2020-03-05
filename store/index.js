import axios from "axios"

export const actions = {
    async GET_DATA({ commit }) {
        const { data } = await this.$axios.$get('localhost:3000/test.json')
        commit('SET_DATA', data)
    }
}