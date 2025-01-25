<script lang="ts">
import { defineComponent } from "vue";
import TheCounter from "../components/TheCounter.vue";

export default defineComponent({
  name: "Home",
  components: {
    TheCounter,
  },
});
</script>

<template>
  <section class="home">
    <h1 class="home__title">Home</h1>
    <TheCounter />
    <RouterLink to="/catalogo" class="home__button">Go to Catalog</RouterLink>
  </section>
</template>

<style scoped lang="scss">
.home {
  text-align: center;

  &__title {
    font-size: 2em;
    margin-bottom: 1em;
  }

  &__button {
    margin-top: 1em;
    padding: 0.5em 1em;
    background-color: #2196f3;
    color: $white;
    border: none;
    border-radius: 0.25em;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;

    &:hover {
      background-color: #1976d2;
    }
  }
}
</style>
