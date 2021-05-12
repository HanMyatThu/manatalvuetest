<template>
  <v-row class="mt-4">
    <v-col sm="12" md="4">
      <v-autocomplete
        hide-details
        label="Enter Title"
        placeholder="Search"
        filled
        rounded
        dense
        default=""
        :items="titles"
        clearable
        single-line
        append-icon="mdi-magnify"
        class="shrink mx-4"
        v-model="articleTitle"
        @keydown.enter="FilterArticles"
      >
      </v-autocomplete>
    </v-col>
    <v-col sm="12" md="4">
      <v-autocomplete
        hide-details
        label="Enter Country"
        placeholder="Search"
        filled
        rounded
        dense
        default=""
        :items="countries"
        single-line
        append-icon="mdi-magnify"
        class="shrink mx-4"
        clearable
        v-model="country"
        @keydown.enter="filterArticlesByCountry"
      >
      </v-autocomplete>
    </v-col>
    <v-col sm="12" md="4">
      <v-autocomplete
        hide-details
        label="Enter Source"
        placeholder="Search"
        filled
        rounded
        dense
        single-line
        default=""
        clearable
        :items="sourceNames"
        append-icon="mdi-magnify"
        class="shrink mx-4"
        v-model="source"
        @keydown.enter="filterArticlesBySource"
      >
      </v-autocomplete>
    </v-col>
    <v-col sm="12" md="12" class="text-right">
      <v-btn @click="reset" depressed class="primary">
        Reset Filters
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FilterInput',
  computed: {
    ...mapState({
      articles: state => state.articles.articles,
      titles: state => state.articles.titles,
      sources: state => state.sources.sources,
      sourceNames: state => state.sources.sourcesName,
      countries: state => state.sources.countries,
    }),
  },
  data() {
    return {
      articleTitle: '',
      country: null,
      source: null,
    };
  },

  methods: {
    FilterArticles() {
      this.$store.dispatch('articles/filterArticles', {
        filterText: this.articleTitle,
      });
    },
    reset() {
      this.articleTitle = '';
      this.country = '';
      this.source = '';

      this.$store.dispatch('articles/resetFilter');
    },
    filterArticlesBySource() {
      this.$store.dispatch('articles/filterArticlesBySource', {
        source: this.source,
      });
    },
    filterArticlesByCountry() {
      this.$store.dispatch('articles/filterArticlesByCountry', {
        country: this.country,
      });
      this.$emit('head-line-title', this.country);
    },
  },
};
</script>
