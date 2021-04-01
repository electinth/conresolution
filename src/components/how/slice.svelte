<script lang="ts">
  export let label: string
</script>

<div
  class="flex flex-col px-6 items-center space-y-6 text-center justify-center text-b2 {$$props.class ||
    ''}"
>
  <div
    class="w-12 h-12 bg-neon text-center flex flex-col justify-center rounded-full text-b4 font-bold"
  >
    {label}
  </div>
  <slot />
</div>
