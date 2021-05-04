<template>
  <v-row class="album p-1 mt-10">
    <v-col cols="12" md="8" offset-md="2" offset-sm="1" sm="10">
      <h4 class="article-title">
        {{ article.title }}
      </h4>
      <v-card class="mx-auto my-12">
        <v-img height="auto" :src="article.urlToImage"></v-img>

        <v-card-title>{{ article.source.name }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <div class="grey--text mr-2 mb-2">
              <v-icon>mdi-account-edit-outline</v-icon>
              {{ article.author }}
            </div>
            <div class="grey--text mr-2 mb-2">
              <v-icon>mdi-clock-outline</v-icon>
              {{ article.publishedAt }}
            </div>
          </v-row>

          <div class="mt-10">
            <p class="description">
              {{ article.description }}
            </p>
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text class="content">
          {{ article.content }}
          <a :href="article.url" class="ml-3" target="_blank">
            Read More
          </a>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArticleShow',
  props: {
    article: {},
  },
};
</script>

<style scoped>
.article-title {
  font-size: 28px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.1em;
}
.description {
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: black;
}
.content {
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: black;
}
</style>
