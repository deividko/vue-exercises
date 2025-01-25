<script lang="ts">
import { defineComponent, computed  } from "vue";
import TheTitle from "./TheTitle.vue";
import { useCounter } from "../composables/userCounter";

export default defineComponent({
  name: "TheCounter",
  components: {
    TheTitle,
  },
  setup() {
    const { counter, increment, decrement } = useCounter();
    const doubledCounter = computed(() => counter.value * 2);

    return {
      counter,
      increment,
      decrement,
      doubledCounter
    };
  },
});
</script>

<template>
  <div class="counter">
    <TheTitle>
      <span :class="{ 'counter--max': counter === 10 }">
        Contador: {{ counter }}
      </span>
    </TheTitle>
    <h3 class="counter__doubled">
      Contador Duplicado: {{ doubledCounter }}
    </h3>
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

  &--max {
    color: $btn-red;
    font-weight: bold;
    font-size: 1.2em;
  }
  &__doubled {
    margin-top: 1em;
    font-size: 1.5em;
    color: $secondary-color;
  }
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

.buttons button:nth-child(2) {
  background-color: $secondary-color;
}

.buttons button:nth-child(2):hover {
  background-color: $secondary-color;
}
</style>
