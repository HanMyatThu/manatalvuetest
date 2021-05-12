<template>
  <v-row no-gutters>
    <v-col v-for="source in sources" :key="source.id" class="mt-10 mx-2">
      <v-btn depressed> {{ source.name }} ({{ source.country }}) </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Sources',
  computed: {
    ...mapState({
      sources: state => state.sources.sources,
    }),
  },
};
</script>
