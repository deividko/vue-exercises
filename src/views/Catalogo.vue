<script lang="ts">
import { defineComponent } from "vue";
import { products } from "../data/mock";
import ProductCard from "../components/ProductCard.vue";

export default defineComponent({
  name: "Catalogo",
  components: {
    ProductCard,
  },
  data() {
    return {
      products,
    };
  },
});
</script>

<template>
  <section class="catalog">
    <h1 class="catalog__title">Catalog</h1>
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
    <RouterLink to="/" class="catalog__button">Go to Home</RouterLink>
  </section>
</template>

<style scoped lang="scss">
.catalog {
  text-align: center;

  &__title {
    font-size: 2em;
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
