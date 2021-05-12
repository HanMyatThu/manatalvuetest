import Api from '@/services/api';

export default {
  namespaced: true,
  state: {
    articles: [],
    titles: [],
    persistantArticles: [],
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.persistantArticles = articles;
      state.articles = articles;
      state.titles = [];
      articles.map(article => {
        state.titles.push(article.title.substring(0, 70));
      });
    },
    SEARCH_ARTICLES(state, articles) {
      state.persistantArticles = articles;
      state.articles = articles;
      state.titles = [];
      articles.map(article => {
        state.titles.push(article.title.substring(0, 70));
      });
    },
    FILTER_ARTICLES(state, articles) {
      state.articles = articles;
    },
    RESET_FILTER(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async loadArticles({ commit, dispatch }) {
      let { data } = await Api().get(
        'top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e',
      );
      let articles = data.articles;
      commit('SET_ARTICLES', articles);
    },
    async searchArticles({ commit }, text) {
      let { data } = await Api().get(
        `top-headlines?q=${text.text}&apiKey=099148be22804e849a0c6fe022b7cf5e`,
      );

      data.articles.length === 0
        ? commit('SEARCH_ARTICLES', [...this.articles])
        : commit('SEARCH_ARTICLES', data.articles);
    },
    async filterArticles({ commit, state }, { filterText }) {
      let articles = state.persistantArticles;
      console.log(filterText);
      if (filterText.length > 1) {
        articles = articles.filter(article => {
          return article.title
            .trim()
            .toLowerCase()
            .includes(filterText.trim().toLowerCase());
        });
        if (articles.length < 1) {
          commit('FILTER_ARTICLES', state.articles);
        }
        commit('FILTER_ARTICLES', articles);
      } else {
        commit('FILTER_ARTICLES', state.persistantArticles);
      }
    },
    async resetFilter({ commit, state }) {
      commit('RESET_FILTER', state.persistantArticles);
    },
  },
};
