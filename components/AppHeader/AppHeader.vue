<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink :to="`/`">
        <img src="../../public/favicon.svg" alt="логотип">
      </NuxtLink>
      <div class="header__right">
        <nav class="header__nav">
          <ul>
          <li tabindex="0">
              <NuxtLink :to="`/`" tabindex="1">
                Works
              </NuxtLink>
            </li>
            <li tabindex="0">
              <NuxtLink :to="`/`" tabindex="1">
                About
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="language-choice">
          <button></button>
        </div>
        <NuxtLink :to="`/`" tabindex="1">
          <AppButton :text="'Lets Start'"/>
        </NuxtLink>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.header {
  min-width: 100vw;

  a {
    &:focus {
      outline: none;
    }
  }

// .header__inner
&__inner {
  padding: 47px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include media-extra-small {
    padding: 16px 16px;
    flex-direction: column;
    align-items: flex-start;
  }
}

// .header__right
&__right {
  display: flex;
  align-items: center;


  @include media-extra-small {
    width: 100%;
    justify-content: space-between;
  }
}

// .header__nav
&__nav {
  ul {
    margin-right: 91px;
    display: flex;
    align-items: center;
    gap: 58px;

    @include media-extra-small {
      margin-right: 24px;
      gap: 16px
    }

    li {
      @include TTr-20;
      color: $main;
      @include defaultTransition;

      @include hover {
        color: $purple;
      }

      @include media-extra-small {
        @include TTr-16;
      }

      &:focus {
        outline: none;
        color: $purple;
      }
    }
  }
}
}
.language-choice {
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  max-height: fit-content;

  button {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: url('/public/uk.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 46%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    @include defaultTransition;

    @include hover {
      border-color: $grey;
    }

    &:focus {
      outline: none;
      border-color: $grey;
    }
  }
}
</style>