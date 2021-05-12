import Vue from 'vue';
import Vuex from 'vuex';
import articleModule from './article';
import sourceModule from './source';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles: articleModule,
    sources: sourceModule,
  },
  plugins: [createPersistedState()],
});
