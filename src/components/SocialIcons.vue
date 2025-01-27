<script setup lang="ts">
const socialNetworks = [
  { name: 'facebook', component: 'IconFacebook' },
  { name: 'twitter', component: 'IconTwitter' },
]
</script>

<template>
  <div class="social-icons">
    <component
      v-for="(network, index) in socialNetworks"
      :key="index"
      :is="network.component"
      class="social-icons__item"
    />
  </div>
</template>

<style scoped lang="scss">
.social-icons {
  display: flex;
  gap: 1em;
  justify-content: center;

  &__item {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
