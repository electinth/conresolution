<script lang="ts">
  import HorizontalContainer from './horizontal-container.svelte'

  import SlideBig from './slide-big.svelte'

  export let heading1: string = ''
  export let heading2: string = ''
</script>

<SlideBig class="w-screen-md md:w-90vw">
  <div class="flex flex-row rounded-lg overflow-hidden w-full h-full p-0">
    <div class="w-1/3 bg-neon relative">
      <div
        class="absolute right-0 top-0 bottom-0 flex flex-col justify-center overflow-hidden"
      >
        <slot name="number" />
      </div>
      <div class="absolute inset-0 flex flex-col justify-center">
        <div class="flex flex-col space-y-4 w-8/10 md:w-6/10 mx-auto">
          <p class="text-h4 text-green-3">{heading1}</p>
          <p class="text-h4 ">{heading2}</p>
        </div>
      </div>
    </div>
    <div class="w-2/3 py-8 col-span-2 bg-blue-1">
      <HorizontalContainer>
        <slot />
      </HorizontalContainer>
    </div>
  </div>
</SlideBig>
