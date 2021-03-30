<script lang="ts">
  export let number: Number | String
</script>

<div class="bg-blue-2 rounded-lg m-1 p-4 text-center space-y-2">
  <p class="text-h6 text-green-3">{number}</p>
  <p class="text-green-2"><slot /></p>
</div>
