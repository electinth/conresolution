<script lang="ts">
  import HorizontalContainer from './horizontal-container.svelte'
  import SlideBig from './slide-big.svelte'

  export let text1: string
  export let text2: string
</script>

<SlideBig class="w-screen-md md:w-screen-lg">
  <div class="flex-1 flex flex-col p-4 md:p-8 space-y-2 h-full">
    <div class="text-h6">
      <p>{text1}</p>
      <p class="text-white max-w-96">{text2}</p>
    </div>
    <div class="flex-1 py-4">
      <HorizontalContainer><slot /></HorizontalContainer>
    </div>
  </div>
</SlideBig>
