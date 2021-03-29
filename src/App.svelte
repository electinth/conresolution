<script lang="ts">
  import countData from './count.json'

  const lastUpdated = new Date(countData.lastUpdated).toLocaleDateString(
    'th-TH'
  )
</script>

<main class="text-center h-screen flex">
  <div class="m-auto space-y-2">
    <h1 class="text-blue-500 text-5xl">CONRESOLUTION</h1>

    <p>Total: {countData.count}</p>
    <p>Last updated: {lastUpdated}</p>
  </div>
</main>
