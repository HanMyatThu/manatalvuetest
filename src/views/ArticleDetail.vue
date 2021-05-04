<template>
  <v-container>
    <ArticleShow :article="article" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import ArticleShow from '../components/articles/ArticleShow';

export default {
  name: 'ArticleDetail',
  computed: {
    ...mapState({
      articles: state => state.articles.articles,
    }),
    article() {
      return (
        this.articles.find(
          article =>
            article.source.id == this.$route.params.id ||
            article.source.name.replace(/\s+/g, '-').toLowerCase() ==
              this.$route.params.id,
        ) || {}
      );
    },
  },
  data() {
    return {};
  },
  components: {
    ArticleShow,
  },
};
</script>
<style scoped></style>
