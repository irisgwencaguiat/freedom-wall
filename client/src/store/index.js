import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: [],
    },
    mutations: {
        setMessages(state, messages) {
            state.messages = messages;
        },
    },
    actions: {
        postMessage({ commit }, message) {
            axios.post('api/messages', message).then((res) => {
                console.log(res.data);
                commit('setMessages', res.data);
            });
        },
        getMessages({ commit }) {
            axios.get('http://localhost:3000/api/messages').then((res) => {
                console.log(res.data);
                commit('setMessages', res.data);
            });
        },
    },
    getters: {
        getMessages(state) {
            return state.messages;
        },
    },
    modules: {},
});
