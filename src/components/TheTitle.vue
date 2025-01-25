
<template>
  <h2 class="title">{{ propTitle }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheTitle",
  props: {
    propTitle: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
.title {
  font-size: 34px;
  color: $primary-color;
  text-align: center;
  margin-top: 3em;
  font-weight: bold;
}
</style>
