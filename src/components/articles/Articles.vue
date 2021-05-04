<template>
  <v-row no-gutters class="mt-10">
    <v-col
      cols="12"
      sm="4"
      md="3"
      xs="12"
      class="mt-10"
      :key="article.id"
      v-for="article in articles"
    >
      <Article :article="article"></Article>
    </v-col>
  </v-row>
</template>

<script>
import Article from './Article';
import { mapState } from 'vuex';

export default {
  name: 'Articles',
  components: {
    Article,
  },
  computed: {
    ...mapState({
      articles: state => state.articles.articles,
    }),
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
