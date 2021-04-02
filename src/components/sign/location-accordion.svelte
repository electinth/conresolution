<script lang="ts">
  import Point from './point.svelte'

  interface Point {
    name: string
    dateStart: string
    dateEnd: string
    contacts: string
    mapLink: string
    lastUpdated: string
    isTemporary?: boolean
    timeStart?: string
    timeEnd?: string
    place?: string
  }

  export let province: string
  export let points: Point[]

  let isOpen: boolean = false
</script>

<div class="flex flex-col space-y-6 py-4">
  <button class="flex flex-row text-left" on:click={() => (isOpen = !isOpen)}>
    <div class="flex-1">
      <span class="text-h6 font-bold">{province}</span>
      <span class="text-b2">( {points.length} จุด )</span>
    </div>
    <div class="flex">
      <svg
        width="17"
        height="13"
        viewBox="0 0 17 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="my-auto transform rotate-180 transition-transform duration-250"
        class:rotate-180={isOpen}
      >
        <path d="M1 1.5L8.5 10.5L16 1.5" stroke="#0E3431" stroke-width="2" />
      </svg>
    </div>
  </button>

  {#if isOpen}
    <div class="grid grid-cols-1 md:grid-cols-2">
      {#each points as point, index}
        <Point {point} number={index + 1} />
      {/each}
    </div>
  {/if}
</div>
