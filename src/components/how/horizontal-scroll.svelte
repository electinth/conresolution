<script lang="ts">
  import { onMount } from 'svelte'
  import Swiper from 'swiper'
  import 'swiper/swiper-bundle.css'

  let container: HTMLElement
  let swiper: Swiper
  let showPrevButton: boolean = false
  let showNextButton: boolean = true

  const transitionEnd = (swiper: Swiper) => {
    showPrevButton = !swiper.isBeginning
    showNextButton = !swiper.isEnd
  }

  onMount(() => {
    const slides = [...container.children[0].children]

    slides.forEach((slide) => slide.classList.add('swiper-slide'))
    slides[0].classList.add('ml-8')
    slides[slides.length - 1].classList.add('mr-8')

    swiper = new Swiper(container, {
      slidesPerView: 'auto',
      spaceBetween: 12,
      on: {
        transitionEnd,
      },
    })
  })
</script>

<div bind:this={container} class="swiper-container -m-8">
  <div class="swiper-wrapper">
    <slot />
  </div>
  {#if showPrevButton}
    <div class="swiper-button-prev" on:click={() => swiper.slidePrev()} />
  {/if}
  {#if showNextButton}
    <div class="swiper-button-next" on:click={() => swiper.slideNext()} />
  {/if}
</div>
