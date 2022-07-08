import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    globalNews: [],
    categoryNews: [],
  },
  getters: {
    getGlobalNews: (state) => state.globalNews,
    getCategoryNews: (state) => state.categoryNews,
  },
  mutations: {
    SET_GLOBALNEWS(state, payload) {
      state.globalNews = payload;
    },
    SET_CATEGORYNEWS(state, payload) {
      state.categoryNews = payload;
    },
  },
  actions: {
    async getAllGlobalNews({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=global&apiKey=3b5e2958339f4772947fd7a642e24172"
        );
        commit("SET_GLOBALNEWS", response.data.articles);
        console.log(response.data);
        const numero = response.data.articles.slice(12, 13);
        console.log(numero);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllCategoryNews({ commit }, category) {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=3b5e2958339f4772947fd7a642e24172`
        );
        commit("SET_CATEGORYNEWS", response.data.articles);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
export default store;
