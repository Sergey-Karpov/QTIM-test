<template>
  <nav class="pagination">
    <button
      v-if="currentPage > 1"
      @click="emitPageChange(currentPage - 1)"
    >
      &lt;
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="emitPageChange(page)"
    >
      {{ page }}
    </button>

    <button
      v-if="currentPage < totalPages"
      @click="emitPageChange(currentPage + 1)"
    >
      &gt;
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits(['page-change'])

const visiblePages = computed(() => {
  const pages = []
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    let start = Math.max(1, current - 2)
    let end = Math.min(total, current + 2)

    if (current - 2 <= 0) {
      end = Math.min(5, total)
    }

    if (current + 2 > total) {
      start = Math.max(1, total - 4)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  }

  return pages
})

const emitPageChange = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('page-change', page)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.pagination {
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    width: 44px;
    height: 44px;
    @include TTr-16;
    background-color: $light-grey;
    color: $main;
    border-radius: 12px;
    @include defaultTransition;

    @include hover {
      background-color: $grey;
      color: $white;
    }

    &.active {
      font-weight: bold;
      background-color: $main;
      color: $white;
      pointer-events: none;
    }

    &:focus {
      outline: none;
      background-color: $grey;
      color: $white;
    }
  }
}
</style>
