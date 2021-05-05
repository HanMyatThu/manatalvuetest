<template>
  <v-btn elevation="2" medium outlined plain @click="$emit('toggle-input')">
    Filter
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
};
</script>
