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
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
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
  background-color: #4caf50;
  color: white;
  transition: background-color 0.3s;
}

.buttons button:hover {
  background-color: #45a049;
}

.buttons button:active {
  background-color: #3e8e41;
}

.buttons button:nth-child(2) {
  background-color: #f44336;
}

.buttons button:nth-child(2):hover {
  background-color: #e53935;
}
</style>
