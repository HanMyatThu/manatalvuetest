<template>
  <v-toolbar dense>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      hide-details
      label="Enter Keyword to search"
      placeholder="Search"
      filled
      rounded
      dense
      single-line
      append-icon="mdi-magnify"
      class="shrink mx-4"
      v-model="searchText"
      @keydown.enter="searchWithEnterKey"
    >
    </v-text-field>

    <router-link to="/">
      Home
    </router-link>

    <router-link to="/about">
      About
    </router-link>
  </v-toolbar>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  name: 'Toolbar',
  data() {
    return {
      searchText: '',
    };
  },
  created() {},
  methods: {
    searchWithEnterKey() {
      console.log('searching');
      if (this.searchText.length > 1) {
        this.$store.dispatch('articles/searchArticles', {
          text: this.searchText.trim(),
        });
      }
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 200px;
}
a {
  text-decoration: none;
  text-transform: uppercase;
}
</style>
