<script lang="ts">
  import { compute_rest_props } from 'svelte/internal'

  export let href: string
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="block {$$props.class} ''}"
>
  <slot />
</a>
