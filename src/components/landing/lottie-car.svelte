<script lang="ts">
  import lottie from 'lottie-web'
  import { onMount } from 'svelte'
  import animationData from '../../assets/animations/car.json'

  let container: HTMLElement

  onMount(() => {
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })
  })
</script>

<div bind:this={container} class="-md:(w-24 -mx-8) {$$props.class || ''}" />
