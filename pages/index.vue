<template>
  <main class="main">
    <div class="main__container">
      <div class="main__inner">
        <AppTitle :text="'Articles'"/>
        <AppLoader v-if="posts.length === 0"/>
        <PostList v-else :postList="paginatedPosts" />
        <AppPagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-change="onPageChange"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const posts = ref<PostList>([])
const currentPage = ref(1)
const postsPerPage = 8

onMounted(async () => {
  const postListData = await getPostList()
  // необходимо перевернуть список, т.к. данные вначале списка с пустым свойством image
  posts.value = postListData.reverse()
})

const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return posts.value.slice(start, end)
})

const onPageChange = (page: number) => {
  currentPage.value = page
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';
.main {
  display: flex;
  align-items: stretch;
  min-height: 90dvh;

  // .main__container
  &__container {
    min-height: 100%;
  }

  // .main__inner
  &__inner {
    margin-top: 120px;
    margin-bottom: 80px;
    height: 100%;


    @include media-extra-small {
      margin-top: 64px;
    }
  }
}
</style>
