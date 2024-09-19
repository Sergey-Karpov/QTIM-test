<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.title {
  margin-bottom: 60px;
  @include TTr-84;

  @include media-extra-small {
    margin-bottom: 32px;
    @include TTr-64;
  }
}
</style>