import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@nuxtjs/axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    csrf: 'b6lgbxPJp7NjQdVRmqzHYH2CYDDGxWxXYPRGk08p',
    authenticated: false,
    counter: 0,
    cardsAdvantages: [
      { title: 'HTML5', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' },
      { title: 'CSS3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' },
      { title: 'JavaScript', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' }
    ],
    apiPath: 'http://project-the-space-nuxt.web/api/'
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    },
    registred({ commit }) {
      const apiUrl = 'http://project-the-space-nuxt.web/api'
      axios.post(apiUrl, {})
    }
  },
  getters: {
    getCardsAdvantages: (state) => {
      return state.cardsAdvantages
    }
  }
})
export default store
