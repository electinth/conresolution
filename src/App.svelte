<script lang="ts">
  import countData from './assets/count.json'

  const lastUpdated = new Date(countData.lastUpdated).toLocaleDateString(
    'th-TH'
  )
</script>

<main class="text-center h-screen flex">
  <div class="m-auto space-y-2">
    <h1 class="text-h1 text-green-3">CONRESOLUTION</h1>

    <p class="text-number">{countData.count}</p>
    <p>Last updated: {lastUpdated}</p>
  </div>
</main>
