<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheTitle",
});
</script>


<template>
  <h2 class="title">
    <slot></slot> <!-- Aquí se mostrará el contenido dinámico -->
  </h2>
</template>



<style scoped lang="scss">
.title {
  font-size: 24px;
  color: $primary-color;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}
</style>
