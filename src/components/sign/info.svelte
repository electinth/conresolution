<script lang="ts">
  export let label: string
</script>

<div class="flex flex-row space-x-2 text-b2">
  <div class="font-bold">{label}</div>
  <div class="flex-1"><slot /></div>
</div>
