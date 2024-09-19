<template>
  <div class="post-list">
    <ul>
      <li v-for="post in postList" :key="post.id">
        <PostCard :post="post" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { PostList } from '~/types/types'

const props = defineProps<{
  postList: PostList
}>()
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';
.post-list {
  margin-bottom: 50px;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 42px 32px;

    @include media-small {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-extra-small {
      grid-template-columns: 1fr;
    }
  }
}
</style>

