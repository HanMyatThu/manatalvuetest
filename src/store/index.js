import Vue from 'vue';
import Vuex from 'vuex';
import articleModule from './article';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles: articleModule,
  },
});
