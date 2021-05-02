<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Articles</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn href="/" text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn href="/about" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
