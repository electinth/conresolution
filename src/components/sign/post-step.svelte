<script lang="ts">
  export let number: number | string
</script>

<div class="py-6 flex flex-row space-x-2">
  <div class="font-bold">{number}</div>
  <div class="flex flex-col flex-1 space-y-6">
    <slot />
  </div>
</div>
