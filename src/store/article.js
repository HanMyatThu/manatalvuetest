import Api from '@/services/api';

export default {
  namespaced: true,
  state: {
    articles: [],
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async loadArticles({ commit, dispatch }) {
      let response = await Api().get('');
      let articles = response.data.articles;
      commit('SET_ARTICLES', articles);
    },
  },
};
