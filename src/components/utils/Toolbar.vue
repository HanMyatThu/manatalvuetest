<template>
  <v-toolbar>
    <v-toolbar-title>Article Shark Place</v-toolbar-title>
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
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
        <router-link to="/" class="mx-auto">
          Home
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/about" class="mx-auto">
          About
        </router-link>
      </v-btn>
    </v-toolbar-items>

    <div class="d-sm-flex d-md-none">
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text>
            <v-icon>
              mdi-menu
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/" class="mx-auto">
                Home
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/about" class="mx-auto">
                About
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
  <!-- <v-toolbar dense>
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
  </v-toolbar> -->
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
  color: black !important;
  text-transform: uppercase;
}
</style>
