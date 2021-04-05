<script lang="ts">
  export let heading: string = ''
  export let id: string = ''
  export let headingClass: string = ''
</script>

<section
  {id}
  class="py-12 px-2 space-y-6 md:(px-8 py-20 space-y-8) {$$props.class || ''}"
>
  {#if heading}
    <h2
      class="text-h4 text-white text-center max-w-screen-sm mx-auto {headingClass}"
    >
      {heading}
    </h2>
  {/if}
  <slot />
</section>
