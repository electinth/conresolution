<script lang="ts">
  import SlideFull from './slide-full.svelte'

  export let heading1: string = ''
  export let heading2: string = ''
</script>

<SlideFull>
  <div class="slide grid grid-cols-3 rounded-lg overflow-hidden -m-8 w-full">
    <div class="flex flex-col bg-neon justify-center p-8">
      <p class="text-h4 text-green-3">{heading1}</p>
      <p class="text-h4 text-green-1">{heading2}</p>
    </div>
    <div class="col-span-2 bg-blue-1 p-8"><slot /></div>
  </div>
</SlideFull>
