<template>
  <button class="btn">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{text: string}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.btn {
  background-color: $main;
  color: $white;
  border: none;
  padding: 16px 32px;
  border-radius: 64px;
  @include TTr-20;
  @include defaultTransition;

  @include hover {
    background-color: $grey;
  }

  @include media-extra-small {
    padding: 12px 24px;
    @include TTr-16;
  }

  &:focus {
    outline: none;
    background-color: $grey;
  }
}
</style>