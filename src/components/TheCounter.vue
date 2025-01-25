<script lang="ts">
import { defineComponent } from "vue";
import TheTitle from "./TheTitle.vue";
import { useCounter } from "../composables/userCounter";

export default defineComponent({
  name: "TheCounter",
  components: {
    TheTitle,
  },
  setup() {
    const { counter, increment, decrement } = useCounter();

    return {
      counter,
      increment,
      decrement,
    };
  },
});
</script>
<template>
  <div class="counter">
    <TheTitle>
      Contador: {{ counter }}
    </TheTitle>
    <div class="buttons">
      <button v-if="counter < 10" @click="increment">Increment</button>
      <button v-if="counter > 0" @click="decrement">Decrement</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter {
  text-align: center;
  margin: 2em;
}

.buttons button {
  margin: 0 0.5em;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 0.25em;
  background-color: $primary-color;
  color: white;
  transition: background-color 0.3s;
}

.buttons button:hover {
  background-color: $primary-color;
}

.buttons button:active {
  background-color: $primary-color;
}

.buttons button:nth-child(2) {
  background-color: $secondary-color;
}

.buttons button:nth-child(2):hover {
  background-color: $secondary-color;
}
</style>
