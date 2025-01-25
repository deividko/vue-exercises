<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  methods: {
    addToCart() {
      alert(`Added "${this.title}" to the cart!`);
    },
  },
});
</script>

<template>
  <article class="product-card">
    <img :src="image" :alt="title" class="product-card__image" />
    <h3 class="product-card__title">{{ title }}</h3>
    <p class="product-card__description">{{ description }}</p>
    <p class="product-card__price">Price: ${{ price }}</p>
    <button class="product-card__button" @click="addToCart">Buy Now</button>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  border: 0.1em solid $border-card;
  border-radius: 0.5em;
  padding: 1em;
  text-align: center;
  max-width: 18em;
  margin: 1em;
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);

  &__image {
    width: 100%;
    border-radius: 0.5em;
  }

  &__title {
    font-size: 1.25em;
    margin: 0.5em 0;
    font-weight: bold;
  }

  &__description {
    font-size: 1em;
    margin: 0.5em 0;
    color: $txt-grey;
  }

  &__price {
    font-size: 1.1em;
    font-weight: bold;
    color: $primary-color;
    margin: 0.5em 0;
  }

  &__button {
    background-color: $primary-color;
    color: white;
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.25em;
    cursor: pointer;

    &:hover {
      background-color: $primary-color;
    }

    &:focus {
      outline: 2px solid $primary-color;
      outline-offset: 2px;
    }
  }
}
</style>
