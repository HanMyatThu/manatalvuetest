<template>
  <v-app>
    <ToolBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from './components/utils/Toolbar';

export default {
  name: 'App',
  components: {
    ToolBar,
  },
  data: () => ({
    //
  }),
};
</script>
