<script lang="ts">
import { defineComponent } from "vue";
import { products } from "../data/mock";
import ProductCard from "../components/ProductCard.vue";
import { useCounterStore } from "../stores/counterStore";

export default defineComponent({
  name: "Catalogo",
  components: {
    ProductCard,
  },
  setup() {
    const counterStore = useCounterStore();

    return {
      products,
      counter: counterStore.counter,
    };
  },
});
</script>

<template>
  <section class="catalog">
    <h1 class="catalog__title">Catálogo</h1>
    <p class="catalog__counter">El contador global está en: {{ counter }}</p>
    <div class="catalog__list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :description="product.description"
        :price="product.price"
      />
    </div>
    <RouterLink to="/" class="catalog__button">Volver al Inicio</RouterLink>
  </section>
</template>

<style scoped lang="scss">
.catalog {
  text-align: center;

  &__title {
    font-size: 2em;
    margin-bottom: 1em;
  }

  &__counter {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 1em;
  }

  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__button {
    margin-top: 1em;
    padding: 0.5em 1em;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 0.25em;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;

    &:hover {
      background-color: $blue-cards;
    }
  }
}
</style>
