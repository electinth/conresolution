<script lang="ts">
  export let label: string
  export let title: string
</script>

<div class="rounded-lg p-8 bg-blue-3 w-lg text-center space-y-6">
  <p class="text-green-3 font-bold">{label}</p>
  <p class="text-h6 font-bold">{title}</p>
  <p class="text-b2">
    <slot />
  </p>
</div>
