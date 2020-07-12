import Vue from "vue";
import Vuex from "vuex";
import categories from "@/assets/game-data/categories.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: categories
  },
  getters: {
    getCategory: state => id => {
      return state.categories[id];
    },
    getCategories: state => {
      return Object.keys(state.categories);
    }
  },
  mutations: {},
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production"
});
