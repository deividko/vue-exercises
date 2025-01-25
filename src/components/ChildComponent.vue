<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildComponent",
  emits: ["greet"],
  methods: {
    emitGreet() {
      this.$emit("greet", "Hola padre!");
    },
  },
});
</script>

<template>
  <div class="child-component">
    <button class="child-component__button" @click="emitGreet">
      Hola Padre
    </button>
  </div>
</template>

<style scoped lang="scss">
.child-component {
  text-align: center;
  margin: 1em 0;

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

