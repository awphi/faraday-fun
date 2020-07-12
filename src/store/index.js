import Vue from "vue";
import Vuex from "vuex";
import categories from "@/assets/game-data/categories.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: categories,
    enabledCategories: Object.keys(categories)
  },
  getters: {
    getCategory: state => id => {
      return state.categories[id];
    },
    getCategories: state => {
      return Object.keys(state.categories);
    },
    getEnabledCategories: state => {
      return state.enabledCategories;
    },
    isCategoryEnabled: state => cat => {
      return state.enabledCategories.includes(cat);
    }
  },
  mutations: {
    toggleCategory(state, cat) {
      if (state.enabledCategories.includes(cat)) {
        state.enabledCategories.splice(state.enabledCategories.indexOf(cat), 1);
      } else {
        state.enabledCategories.push(cat);
      }
    }
  },
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production"
});
