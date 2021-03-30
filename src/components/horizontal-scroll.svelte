<script lang="ts">
  import { onMount } from 'svelte'
  import Swiper from 'swiper'
  import 'swiper/swiper-bundle.css'

  let container: HTMLElement

  onMount(() => {
    const slides = [...container.children[0].children]

    slides.forEach((slide) => slide.classList.add('swiper-slide'))
    slides[0].classList.add('ml-8')
    slides[slides.length - 1].classList.add('mr-8')

    new Swiper(container, {
      slidesPerView: 'auto',
      spaceBetween: 18,
    })
  })
</script>

<div bind:this={container} class="swiper-container -m-8">
  <div class="swiper-wrapper">
    <slot />
  </div>
</div>
