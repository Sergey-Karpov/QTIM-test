<template>
  <main class="main">
    <div class="main__container">
      <div class="main__inner">
        <div v-if="post" class="post">
          <AppTitle :text="post.title" />
          <div :class="['post__img', { 'post__img--error': imageError }]">
            <img
              :src="post.image"
              :alt="post.preview"
              @error="onImageError"
            />
          </div>
          <div class="post__text">
            <span>About</span>
            <p>{{ post.description }}</p>
          </div>
          <NuxtLink :to="`/`" class="post__back-link">
            Back to list
          </NuxtLink>
        </div>
        <AppLoader v-else/>
      </div>
    </div>
  </main>
</template>

<script setup>
const post = ref(null)
const imageError = ref(false)
const route = useRoute()

const onImageError = () => {
  imageError.value = true
}

onMounted(async () => {
  const postId = route.params.id

  post.value = await getPost(postId)
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';
.main {
  min-height: 90dvh;
  display: flex;
  align-items: stretch;

  // .main__inner
  &__inner {
    min-height: 100%;
    margin-top: 120px;
    margin-bottom: 80px;

    @include media-extra-small {
      margin-top: 64px;
    }
  }
}

.post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  // .post__img
  &__img {
    width: 100%;
    margin-bottom: 80px;

    @include media-small {
      margin-bottom: 32px;
    }

    // .post__img--error
    &--error {
      aspect-ratio: 1 / 0.5;
      background: url('/empty-image.png');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      img {
        display: none;
      }
    }
  }

  // .post__text
  &__text {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    max-width: 695px;

    span {
      @include TTr-16;
    }
    p {
      @include TTr-36;
      text-align: left;

      @include media-small {
        @include TTr-20;
    }
    }
  }

  // .post__back-link
  &__back-link {
    position: relative;
    @include TTr-20;
    @include defaultTransition;

    @include hover {
      padding-left: 28px;

      &::before {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
    }

    &:focus {
      outline: none;
      padding-left: 28px;
      color: $purple;

      &::before {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
    }

    &:before {
      content: '\2190';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      font-size: 24px;
      color: currentColor;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      @include defaultTransition;
    }
  }
}
</style>
