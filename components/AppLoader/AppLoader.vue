<template>
  <div class="loader">
    <span class="loader__el"></span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';
.loader {
  position: relative;
  width: 100%;
  height: 100%;

  // .loader__el
  &__el {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    font-size: 48px;
    letter-spacing: 2px;

    &:before {
      content: "Loading";
      color: $main;
    }

    &:after {
      content: "";
      width: 20px;
      height: 20px;
      background-color: $purple;
      border-radius: 50%;
      position: absolute;
      inset: 0;
      margin: auto;
      top: -70px;
      animation: motion 3s ease-in-out infinite;
    }
  }
}

@keyframes motion {
  0%, 50%, 100% {
    transform: translateX(0) scale(1);
  }
  25% {
    transform: translateX(-100px) scale(0.3);
  }
  75% {
    transform: translateX(100px) scale(0.3);
  }
}
</style>