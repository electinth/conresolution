<script lang="ts">
  export let color: string
</script>

<div class="flex flex-row space-x-1">
  <div class="rounded-full w-3 h-3 {color}" />
  <p class="text-b2">
    <slot />
  </p>
</div>
