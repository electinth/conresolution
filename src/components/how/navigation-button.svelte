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

<div class="absolute top-0 bottom-0 flex z-10 {divClassMap[direction]}">
  <button
    class="bg-white my-auto text-center h-16 w-10 space-y-1 md:(h-24 w-16 space-y-2) opacity-90 flex flex-col items-center justify-center {buttonClassMap[
      direction
    ]}"
    on:click
  >
    <slot />
  </button>
</div>
