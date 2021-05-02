<template>
  <v-card
    class="mx-2 backgroundImage"
    max-width="400"
    min-height="420"
    :style="{ 'background-image': `url(${article.urlToImage})` }"
  >
    <v-row class="mx-1 content" max-width="400" min-height="400">
      <v-spacer></v-spacer>
      <v-icon medium class="icon">
        mdi-arrow-right
      </v-icon>
      <v-card-text class="date">
        {{ getDateString(new Date(article.publishedAt)) }}
      </v-card-text>
      <v-card-text
        :class="[article.urlToImage === null ? 'whiteTitle' : 'title']"
      >
        {{ article.title }}
      </v-card-text>
      <v-card-text class="description">
        {{ article.description }}
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: {},
  },
  methods: {
    getDateString(date) {
      var mm = date.getMonth() + 1; // getMonth() is zero-based
      var dd = date.getDate();

      return [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd,
      ].join('.');
    },
  },
};
</script>

<style scoped>
.backgroundImage {
  background-size: cover;
  background-position: center;
}
.icon {
  padding: 10px;
  color: rgb(18, 246, 216);
}
.content {
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  min-height: 420px;
}

.content .date {
  color: white;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 200;
  padding-bottom: 0;
  font-family: 'Roboto', sans-serif;
}
.content .whiteTitle {
  color: white;
  font-weight: 500;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 2em;
}
.content .title {
  color: rgb(44, 238, 228);
  font-weight: 500;
  font-size: 18px;
  line-height: 2em;
  font-family: 'Roboto', sans-serif;
}
.content .description {
  color: #fff;
  font-weight: 300;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}
</style>
