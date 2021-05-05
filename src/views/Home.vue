<template>
  <v-container class="mt-10">
    <v-row no-gutters>
      <v-col sm="5" md="6">
        <h2 class="mx-2">Latest News</h2>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0" class="text-right">
        <Button @toggle-input="toggleFilterForm()" />
      </v-col>
    </v-row>
    <div v-if="toggleForm">
      <FilterInput />
    </div>
    <Articles />
  </v-container>
</template>

<script>
import Button from '../components/utils/Button';
import Articles from '../components/articles/Articles';
import FilterInput from '../components/utils/FilterInput';

export default {
  name: 'Home',
  components: {
    Button,
    Articles,
    FilterInput,
  },
  created() {
    this.$store.dispatch('articles/loadArticles');
  },
  data() {
    return {
      toggleForm: false,
    };
  },
  methods: {
    toggleFilterForm() {
      this.toggleForm = !this.toggleForm;
    },
  },
};
</script>
