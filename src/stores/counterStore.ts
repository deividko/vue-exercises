import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {

  const counter = ref(0);

  const increment = () => {
    if (counter.value < 10) {
      counter.value++;
    }
  };

  const decrement = () => {
    if (counter.value > 0) {
      counter.value--;
    }
  };

  const doubledCounter = computed(() => counter.value * 2);

  const counterMessage = computed(() => {
    if (counter.value === 0) {
      return "Estás en el valor mínimo";
    } else if (counter.value === 10) {
      return "Estás en el valor máximo";
    } else {
      return "Estás en los parámetros adecuados";
    }
  });

  return {
    counter,
    increment,
    decrement,
    doubledCounter,
    counterMessage,
  };
});
