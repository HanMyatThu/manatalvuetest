import Api from '@/services/api';

export default {
  namespaced: true,
  state: {
    sources: [],
    sourcesName: [],
    countries: [],
  },
  mutations: {
    SET_SOURCES(state, sources) {
      state.sources = sources;
      state.sourcesName = [];
      state.countries = [];
      sources.map(source => {
        state.sourcesName.push(source.name);
        state.countries.push(source.country);
      });
    },
    // SEARCH_ARTICLES(state, sources) {
    //   state.sources = sources;
    // },
    // FILTER_ARTICLES(state, sources) {
    //   state.sources = sources;
    // },
  },
  actions: {
    async fetchSources({ commit, dispatch }) {
      let { data } = await Api().get(
        'sources?apiKey=099148be22804e849a0c6fe022b7cf5e',
      );
      let sources = data.sources;
      commit('SET_SOURCES', sources);
    },
    // async searchArticles({ commit }, text) {
    //   let { data } = await Api().get(
    //     `?q=${text.text}&apiKey=099148be22804e849a0c6fe022b7cf5e`,
    //   );

    //   data.articles.length === 0
    //     ? commit('SEARCH_ARTICLES', [...this.articles])
    //     : commit('SEARCH_ARTICLES', data.articles);
    // },
    // async filterArticles({ commit, state }, { filterText }) {
    //   let articles = state.articles;
    //   if (filterText.length > 1) {
    //     articles = articles.filter(article => {
    //       return article.title
    //         .trim()
    //         .toLowerCase()
    //         .includes(filterText.trim().toLowerCase());
    //     });
    //     if (articles.length < 1) {
    //       commit('FILTER_ARTICLES', state.articles);
    //     }
    //     commit('FILTER_ARTICLES', articles);
    //   }

    //   commit('FILTER_ARTICLES', articles);
    // },
  },
};
