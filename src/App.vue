<script setup lang="ts">
import TheTitle from './components/TheTitle.vue'
import SocialIcons from './components/SocialIcons.vue'
</script>
<template>
  <div id="app">
    <TheTitle> Este es un título dinámico con slot </TheTitle>
    <router-view />
    <ParentComponent />
    <SocialIcons />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: $background-page;
  min-height: 90em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
