<script lang="ts">
  export let heading: string
</script>

<section class="py-12 px-4 space-y-8 md:(px-8 py-20) {$$props.class || ''}">
  <h2 class="text-h4 text-white text-center max-w-screen-sm mx-auto">
    {heading}
  </h2>
  <slot />
</section>
