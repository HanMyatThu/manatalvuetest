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
      <Article :article="article" />
    </v-col>
  </v-row>
</template>

<script>
import Article from './Article';

export default {
  name: 'Articles',
  props: {
    articles: {
      type: Array,
    },
  },
  components: {
    Article,
  },
};
</script>

<style scoped></style>
