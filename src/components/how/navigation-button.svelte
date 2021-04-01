<script lang="ts">
  export let direction: 'prev' | 'next'

  const divClassMap = {
    prev: 'left-0',
    next: 'right-0',
  }

  const buttonClassMap = {
    prev: 'rounded-r-lg',
    next: 'rounded-l-lg',
  }
</script>

<div class="absolute top-0 bottom-0 {divClassMap[direction]} flex z-10">
  <button
    class="bg-white {buttonClassMap[
      direction
    ]} my-auto text-center h-20 px-3 space-y-2 opacity-60"
    on:click
  >
    <slot />
  </button>
</div>
