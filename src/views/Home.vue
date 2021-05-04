<template>
  <v-container class="mt-10">
    <v-row no-gutters>
      <v-col sm="5" md="6">
        <h2>Head Titles</h2>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0" class="text-right">
        <Button />
      </v-col>
    </v-row>
    <Articles />
  </v-container>
</template>

<script>
import Button from '../components/utils/Button';
import Articles from '../components/articles/Articles';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Button,
    Articles,
  },
  created() {
    this.$store.dispatch('articles/loadArticles');
  },
  data() {
    return {};
  },
};
</script>
