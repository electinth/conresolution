<script lang="ts" context="module">
  export interface Point {
    name: string
    dateStart?: string
    dateEnd?: string
    contacts?: string
    mapLink?: string
    lastUpdated: string
    isTemporary?: boolean
    timeStart?: string
    timeEnd?: string
    place?: string
    note?: string
  }
</script>

<script lang="ts">
  import ExternalLink from '../external-link.svelte'
  import { formatThaiDate } from '../../utils/date'
  import Info from './info.svelte'

  export let number: string | number
  export let point: Point
</script>

<div class="flex flex-row space-x-3 mb-4">
  <div>
    <div
      class="w-6 h-6 rounded-full text-white flex {point.isTemporary
        ? 'bg-orange'
        : 'bg-blue-1'}"
    >
      <p class="text-b4 font-bold text-center m-auto">{number}</p>
    </div>
  </div>
  <div class="flex-1 space-y-2">
    <p class="font-bold">{point.name}</p>
    {#if point.place}
      <Info label="สถานที่">{point.place}</Info>
    {/if}
    {#if point.dateStart || point.dateEnd}
      <Info label="วันที่">
        {#if point.dateStart && point.dateEnd}
          {formatThaiDate(point.dateStart)} - {formatThaiDate(point.dateEnd)}
        {:else if point.dateStart}
          {formatThaiDate(point.dateStart)} เป็นต้นไป
        {:else}
          จนถึง {formatThaiDate(point.dateEnd)}
        {/if}
      </Info>
    {/if}
    {#if point.timeStart && point.timeEnd}
      <Info label="เวลา">
        {point.timeStart} - {point.timeEnd} น.
      </Info>
    {/if}
    {#if point.contacts}
      <Info label="ติดต่อ">
        {#each point.contacts.split('\n') as contact}
          <p>{contact}</p>
        {/each}
      </Info>
    {/if}
    {#if point.note}
      <Info label="หมายเหตุ">
        {#each point.note.split('\n') as contact}
          <p>{contact}</p>
        {/each}
      </Info>
    {/if}
    {#if point.mapLink}
      <ExternalLink
        href={point.mapLink}
        class="text-b3 underline  {point.isTemporary
          ? 'text-orange'
          : 'text-blue-1'}"
      >
        ดูแผนที่
      </ExternalLink>
    {/if}
  </div>
</div>
