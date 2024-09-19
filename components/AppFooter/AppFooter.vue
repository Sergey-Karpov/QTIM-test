<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__inner">
        <div class="footer__top">
          <div class="footer__left">
            <span class="footer__question">Is there a project?</span>
            <span class="footer__call">Let’s work together</span>
          </div>
          <div class="footer__right">
            <ul class="footer__contacts">
              <li>
                <span>For all questions</span>
                <div class="footer__contact">
                  <a href="tel:+79202780068">+7 (920) 278—00—68</a>
                  <a href="mailto:qtim@agency.com">qtim@agency.com</a>
                </div>
              </li>
              <li>
                <span>Office in Russia</span>
                <div class="footer__contact">
                  <span>139 Ruben Station Lake Drew, NM 52678</span>
                  <a href="#">
                    <i>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#101010"/>
                        <path d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </i>
                  </a>
                </div>
              </li>
              <li>
                <span>Office in Dubai</span>
                <div class="footer__contact">
                  <span>139 Ruben Station Lake Drew, NM 52678</span>
                  <a href="#">
                    <i>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#101010"/>
                        <path d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <ul class="footer__links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
          </ul>
          <ul class="footer__links">
            <li>
              <a href="#">Behance</a>
            </li>
            <li>
              <a href="#">Linkedn</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__start-link">
      <a href="#">
        Go
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';
.footer {
  overflow: hidden;
  aspect-ratio: 1 / 0.625;
  position: relative;
  background-color: $pink;
  width: 100%;

  @media screen and (min-width: 2000px) {
    aspect-ratio: 1 / 0.4;
  }

  @include media-extra-small {
    aspect-ratio: auto;
  }

  a {
    &:focus {
      outline: none;
      color: $purple;
    }
  }

  // .footer__container
  &__container {
    height: 100%;
  }

  // .footer__inner
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 140px 0 30px;
    width: 100%;
    height: 100%;

    @include media-small {
      padding: 56px 0 30px;
    }

    @include media-extra-small {
      padding: 24px 0 24px;
      gap: 48px;
    }
  }

  // .footer__top
  &__top {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    @include media-extra-small {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  // .footer__bottom
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include media-small {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }

  // .footer__left
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  // .footer__question
  &__question {
    @include TTr-16;
    margin-bottom: 56px;

    @include media-small {
      margin-bottom: 24px;
    }

    @include media-extra-small {
      margin-bottom: 12px;
    }
  }

  // .footer__call
  &__call {
    @include TTr-112;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 12px;

    @include media-small {
      @include TTr-64;
    }

    @include media-extra-small {
      @include TTr-36;
      text-underline-offset: 6px;
    }
  }

  // .footer__links
  &__links {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 32px;

    a {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;
    }

    @include media-small {
      display: contents;
    }
  }

  // .footer__right
  &__right {
    padding-top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    @include media-medium {
      padding-top: 0;
    }

    @include media-small {
      align-items: flex-end;
    }
  }

  // .footer__contacts
  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;

    @include media-small {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      row-gap: 4px;
    }

    @include media-extra-small {
      grid-template-columns: 1fr;
      row-gap: 16px;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      @include media-small {
        gap: 4px;
      }

      &:first-child {
        .footer__contact {
          @include media-small {
            flex-direction: column;
          }
        }
      }
    }
  }

  // .footer__contact
  &__contact {
    max-width: 152px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @include TTr-16;

    @include media-small {
      gap: 4px;
    }

    @include media-extra-small {
      flex-direction: row;
    }

    a {
      svg {
        rect {
          @include defaultTransition;
        }

        path {
          @include defaultTransition;
        }
      }

      @include hover {
        svg {
          rect {
            fill: $purple;
          }
        }
      }
    }
  }

  // .footer__start-link
  &__start-link {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 358px;
    height: 358px;
    border-radius: 50%;
    background-color: $main;
    color: $white;
    @include defaultTransition;

    @include hover {
      transform: translate(-50%, -50%) scale(1.1);
    }

    @include media-medium {
      width: 240px;
      height: 240px;
    }

    @include media-extra-small {
      left: auto;
      top:auto;
      bottom: 24px;
      right: 24px;
      transform: translate(0, 0);
      width: 120px;
      height: 120px;

      @include hover {
        transform: translate(0, 0) scale(1);
      }
    }

    a {
      padding-top: 112px;
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      border-radius: 50%;
      @include TTr-32;

      @include media-medium {
        padding-top: 64px;
      }

      @include media-extra-small {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: 100%;
        padding-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
</style>