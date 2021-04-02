<script lang="ts">
  export let heading: string = ''
  export let id: string = ''
</script>

<section
  {id}
  class="py-12 px-4 space-y-8 md:(px-8 py-20) {$$props.class || ''}"
>
  {#if heading}
    <h2 class="text-h4 text-white text-center max-w-screen-sm mx-auto">
      {heading}
    </h2>
  {/if}
  <slot />
</section>
