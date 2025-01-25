<script lang="ts">
import TheTitle from "./components/TheTitle.vue";
import TheCounter from "./components/TheCounter.vue";
import ParentComponent from "./components/ParentComponent.vue";
import SocialIcons from "./components/SocialIcons.vue";


export default {
  name: "App",
  components: {
    TheTitle,
    TheCounter,
    ParentComponent,
    SocialIcons
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
  background-color: #1a1919;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
