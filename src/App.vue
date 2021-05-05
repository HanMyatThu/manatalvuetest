<template>
  <v-app>
    <ToolBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import ToolBar from './components/utils/Toolbar';
import Footer from './components/utils/Footer';

export default {
  name: 'App',
  components: {
    ToolBar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
header {
  max-height: 65px;
}
</style>
