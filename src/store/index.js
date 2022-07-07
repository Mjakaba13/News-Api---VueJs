import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    globalNews: [],
    // techNews: [],
    // businessNews: [],
    // healthNews: [],
    categoryNews: [],
  },
  getters: {
    getGlobalNews: (state) => state.globalNews,
    // getTechNews: (state) => state.techNews,
    // getBusinessNews: (state) => state.techNews,
    // getHealthNews: (state) => state.techNews,
    getCategoryNews: (state) => state.categoryNews,
  },
  mutations: {
    SET_GLOBALNEWS(state, payload) {
      state.globalNews = payload;
    },
    // SET_TECHNEWS(state, payload) {
    //   state.techNews = payload;
    // },
    // SET_BUSINESSNEWS(state, payload) {
    // state.techNews = payload;
    // },
    // SET_HEALTHNEWS(state, payload) {
    // state.techNews = payload;
    // },
    SET_CATEGORYNEWS(state, payload) {
      state.categoryNews = payload;
    },
  },
  actions: {
    async getAllGlobalNews({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=global&from=2022-07-06&apiKey=3b5e2958339f4772947fd7a642e24172"
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
    // async getAllTechNews({ commit }) {
    //   try {
    //     const response = await axios.get(
    //       "https://newsapi.org/v2/top-headlines?category=technology&apiKey=3b5e2958339f4772947fd7a642e24172"
    //     );
    //     commit("SET_TECHNEWS", response.data.articles);
    //     console.log(response);
    //     return response;
    //   } catch (error) {
    //     consol.log(error);
    //   }
    // },
    // async getAllBusinessNews({ commit }) {
    //   try {
    //     const response = await axios.get(
    //       "https://newsapi.org/v2/top-headlines?category=business&apiKey=3b5e2958339f4772947fd7a642e24172"
    //     );
    //     commit("SET_BUSINESSNEWS", response.data.articles);
    //     console.log(response);
    //     return response;
    //   } catch (error) {
    //     consol.log(error);
    //   }
    // },
    // async getAllHealthNews({ commit }) {
    //   try {
    //     const response = await axios.get(
    //       "https://newsapi.org/v2/top-headlines?category=health&apiKey=3b5e2958339f4772947fd7a642e24172"
    //     );
    //     commit("SET_HEALTHNEWS", response.data.articles);
    //     console.log(response);
    //     return response;
    //   } catch (error) {
    //     consol.log(error);
    //   }
    // },
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
