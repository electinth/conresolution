<script>
  import FollowUs from '../components/follow-us.svelte'
  import Layout from '../components/layout.svelte'
</script>

<Layout class="bg-green-1 divide-white divide-y-1">
  <div class="flex justify-center">
    <FollowUs />
  </div>

  <div class="flex justify-around py-12">
    <a href="/#" target="_blank" rel="noopener noreferrer">
      <img src="images/logo-resolution.png" alt="Resolution" />
    </a>
    <a href="/#" target="_blank" rel="noopener noreferrer">
      <img src="images/logo-ilaw.png" alt="iLaw" />
    </a>
    <a href="/#" target="_blank" rel="noopener noreferrer">
      <img src="images/logo-elect.png" alt="ELECT" />
    </a>
  </div>
</Layout>

<style>
  a {
    @apply my-auto max-w-24;
  }
</style>
