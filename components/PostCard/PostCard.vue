<template>
  <div class="post-card" tabindex="0">
    <div class="post-card__inner">
      <div class="post-card__content">
        <div :class="['post-card__img', { 'post-card__img--error': imageError }]">
          <img
            :src="post.image"
            :alt="post.preview"
            @error="onImageError"
          >
        </div>
        <p>{{ post.description }}</p>
      </div>
      <div class="post-card__more">
        <NuxtLink :to="`/posts/${post.id}`">Read more</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  post: Post
}>()

const imageError = ref(false)

const onImageError = () => {
  imageError.value = true
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';
.post-card {
  position: relative;

  @include hover {
    .post-card__content {
      transform: translateY(-20px);
    }
    .post-card__more {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }

  @media only screen and (max-width: 1100px){
    .post-card__content {
      transform: translateY(-20px);
    }
    .post-card__more {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }

  &:focus {
    outline: none;

    .post-card__content {
      transform: translateY(-20px);
    }
    .post-card__more {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }

  &:has(.post-card__more a:focus) {
    .post-card__content {
      transform: translateY(-20px);
    }
    .post-card__more {
      opacity: 1;
      visibility: visible;
      pointer-events: all;

      a {
        outline: none;
        color: $purple;
      }
    }
  }

  // .post-card__inner
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  // .post-card__content
  &__content {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    @include defaultTransition;

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: calc(1.2em * 3);
      @include TTr-20;
    }
  }

  // .post-card__img
  &__img {
    min-width: 100%;
    display: flex;
    height: 280px;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // .post-card__img--error
    &--error {
      background: url('/empty-image.png');
      background-position: center;
      background-size: contain;

      img {
        display: none;
      }
    }
  }

  // .post-card__more
  &__more {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    @include defaultTransition;

    a {
      @include TTr-20;
      color: $pink;
      @include defaultTransition;

      @include hover {
        color: $purple;
      }
    }
  }
}
</style>


