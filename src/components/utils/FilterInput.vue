<template>
  <v-row class="mt-4">
    <v-col sm="12" md="4" offset-md="8">
      <v-text-field
        hide-details
        label="Enter Title"
        placeholder="Search"
        filled
        rounded
        dense
        single-line
        append-icon="mdi-magnify"
        class="shrink mx-4"
        v-model="articleTitle"
        @keydown.enter="FilterArticles"
      >
      </v-text-field>
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
    }),
  },
  data() {
    return {
      articleTitle: '',
    };
  },

  methods: {
    FilterArticles() {
      if (this.articleTitle.length > 1) {
        this.$store.dispatch('articles/filterArticles', {
          filterText: this.articleTitle.trim(),
        });
      }
    },
  },
};
</script>
