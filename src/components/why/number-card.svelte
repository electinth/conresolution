<script lang="ts">
  export let number: Number | String
</script>

<div
  class="flex flex-row bg-blue-2 rounded-lg m-1 p-4 -md:(space-x-4) md:(flex-col space-y-3 text-center)"
>
  <p class="text-h6 text-green-3 -md:my-auto">{number}</p>
  <p class="text-green-2"><slot /></p>
</div>
