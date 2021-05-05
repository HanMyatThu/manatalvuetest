<template>
  <v-footer dark padless class="mt-10">
    <v-card flat tile class="teal lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="social in socials"
          :key="social.icon"
          class="mx-4 white--text"
          icon
        >
          <a :href="social.link" target="_blank">
            <v-icon size="24px">
              {{ social.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>
          <a
            href="https://www.linkedin.com/in/han-myat-thu-879046182/"
            target="_blank"
            >Draz</a
          ></strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        link: 'https://www.facebook.com',
        icon: 'mdi-facebook',
      },
      {
        link: 'https://www.twitter.com',
        icon: 'mdi-twitter',
      },
      {
        link: 'https://www.linkedin.com/in/han-myat-thu-879046182/',
        icon: 'mdi-linkedin',
      },
      {
        link: 'https://www.instagram.com',
        icon: 'mdi-instagram',
      },
    ],
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff !important;
}
</style>
