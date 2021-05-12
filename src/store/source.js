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
  },
  actions: {
    async fetchSources({ commit, dispatch }) {
      let { data } = await Api().get(
        'sources?apiKey=099148be22804e849a0c6fe022b7cf5e',
      );
      let sources = data.sources;
      commit('SET_SOURCES', sources);
    },
  },
};
