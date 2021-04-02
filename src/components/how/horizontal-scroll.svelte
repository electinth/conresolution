<script lang="ts">
  import { onMount } from 'svelte'
  import Swiper from 'swiper'
  import 'swiper/swiper-bundle.css'
  import NavigationButton from './navigation-button.svelte'

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
    slides[0].classList.add('ml-4', 'md:ml-8')
    slides[slides.length - 1].classList.add('mr-4', 'md:mr-8')

    swiper = new Swiper(container, {
      slidesPerView: 'auto',
      spaceBetween: 12,
      freeMode: true,
      on: {
        transitionEnd,
      },
    })
  })
</script>

<div bind:this={container} class="swiper-container -m-4 md:-m-8 relative">
  <div class="swiper-wrapper">
    <slot />
  </div>
  {#if showPrevButton}
    <NavigationButton direction="prev" on:click={() => swiper.slidePrev()}>
      <svg
        width="19"
        height="11"
        viewBox="0 0 19 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.25 1.125L2 5.5L7.25 9.875"
          stroke="#0E3431"
          stroke-width="2"
        />
        <line
          x1="2"
          y1="5.125"
          x2="18.25"
          y2="5.125"
          stroke="#0E3431"
          stroke-width="2"
        />
      </svg>
    </NavigationButton>
  {/if}
  {#if showNextButton}
    <NavigationButton direction="next" on:click={() => swiper.slideNext()}>
      <p class="text-b3 text-green-1 font-bold">
        ประเทศ<br />จะดีขึ้น<br />อย่างไร
      </p>
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mx-auto"
      >
        <path
          d="M11.75 10.375L17 6L11.75 1.625"
          stroke="#0E3431"
          stroke-width="2"
        />
        <line
          x1="17"
          y1="6.375"
          x2="0.75"
          y2="6.375"
          stroke="#0E3431"
          stroke-width="2"
        />
      </svg>
    </NavigationButton>
  {/if}
</div>
