<script lang="ts">
import TheTitle from "./components/TheTitle.vue";

export default {
  name: "App",
  components: {
    TheTitle,
  },
};
</script>
<template>
  <div id="app">
    <TheTitle propTitle="Este es un título dinámico" />
  </div>
</template>



<style>

</style>
