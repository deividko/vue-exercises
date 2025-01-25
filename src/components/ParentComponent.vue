<script lang="ts">
import { defineComponent, provide } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default defineComponent({
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  setup() {
    const parentMessage = "¡Hola desde ParentComponent!";
    provide("parentMessage", parentMessage);
  },
});
</script>

<template>
  <section class="parent-component">
    <h2 class="parent-component__title">========= Parent Component =========</h2>
    <p class="parent-component__message">
      Este es el mensaje proporcionado al hijo a través de provide/inject.
    </p>
    <ChildComponent />
  </section>
</template>

<style scoped lang="scss">
.parent-component {
  text-align: center;

  &__title {
    font-size: 1.5em;
    margin: 5em 0 0 0;
  }

  &__message {
    font-size: 1.2em;
    color: $txt-grey;
    margin: 1em 0;
  }
}
</style>
