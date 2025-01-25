<script lang="ts">
import TheTitle from "./components/TheTitle.vue";
import TheCounter from "./components/TheCounter.vue";

export default {
  name: "App",
  components: {
    TheTitle,
    TheCounter
  },
};
</script>
<template>
  <div id="app">
    <TheTitle>
      Este es un título dinámico con slot
    </TheTitle>
    <TheCounter />
    <router-view />
  </div>
</template>
