<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "ChildComponent",
  setup() {
    const parentMessage = inject<string>("parentMessage");
    return { parentMessage };
  },
});
</script>

<template>
  <div class="child-component">
    <p class="child-component__message">
      Mensaje recibido del padre: {{ parentMessage || "No hay mensaje." }}
    </p>
    <button class="child-component__button">
      Este botón es solo decorativo
    </button>
  </div>
</template>

<style scoped lang="scss">
.child-component {
  text-align: center;
  margin: 1em 0;

  &__message {
    margin-bottom: 1em;
    font-size: 1.2em;
    color: $txt-grey;
  }

  &__button {
    padding: 1.5em 1.8em;
    background-color: $primary-color;
    color: white;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;

    &:hover {
      background-color: $secondary-color;
    }
  }
}
</style>
